@extends('layouts.masterPage')

@section('contant')
<!--Breadcrumb section-->
<div class="productPage">

  <div class="breadcrumb_section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="breadcrumb_inner">
            <ul>
              <li><a href="{{asset("/")}}">Home</a></li>
              <li><i class="zmdi zmdi-chevron-right"></i></li>
              <li>product Details</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Breadcrumb section end-->

  <!--product Details Inner-->
  <div class="product_details_inner left_sidebar ptb-70">

    <div class="container">
      @if ($message = Session::get('success'))
      <div class="alert alert-success">
        {{ $message }}
      </div>
      @endif
      <div class="row">
        <!--Product Tab Style start-->
        <div class="col-md-12 col-lg-5 col-12">
          <div class="product-details-img-content">
            <div class="product-details-tab">
              <div id="img-1" class="zoomWrapper single-zoom">
                <img style="width: 100%" alt="big-1" src="{{asset("images/".$Product->image)}}">
              </div>

            </div>
          </div>
        </div>
        <!--Product Tab Style End-->
        <div class="col-md-12 col-lg-7 col-12">
          <div class="product-details-content">
            <h3>{{$Product->name}}</h3>
            <div class="rating-number">
              <div class="product_rating">
                {!! str_repeat('<i class="fa fa-star" aria-hidden="true"></i>', $averageRate) !!}
                {!! str_repeat('<i class="fa fa-star-o" aria-hidden="true"></i>', 5 - $averageRate) !!}
              </div>
              <div class="review_count">
                <span>{{count($reviews)}} Ratting (S)</span>
              </div>
            </div>
            <div class="price_amount">
              @if ($Product->discount != 0)
              <span class="discount_price">-{{$Product->discount}} %</span>
              <span class="current_price">{{$Product->price - (($Product->discount * $Product->price)/100)}} JOD</span>
              <span class="old_price">{{$Product->price}} JOD</span>
              @else
              <span class="current_price">{{$Product->price}} JOD</span>
              @endif

            </div>
            <p>{{$Product->description}} A motorcycle, often called a motorbike, bike, or cycle, is a two- or
              three-wheeled motor vehicle. Motorcycle design varies greatly to suit a range of different purposes:
              long-distance travel, commuting, cruising, sport including racing, and off-road riding. Motorcycling is
              riding a motorcycle and related social activity such as joining a motorcycle club and attending motorcycle
              rallies.</p>
            @if (!isset(session("loginUser")['id'])||session("loginUser")['role']=='customer')
            <form method="post" action="{{asset('addToCart')}}" class="single_product_action d-flex align-items-center">
              @csrf
              <div class="cart-plus-minus">
                <input type="text" value="1" name="qty" class="cart-plus-minus-box" min="1">
              </div>
              <div class="add_to_cart_btn">
                <input type="hidden" name="id" value="{{$Product->id}}">
                <button type="submit" class="btn btnCard">
                  <img src="http://127.0.0.1:8000/assets/img/icon/cart.png" alt="Mini Cart Icon"> Add To Card</button>
              </div>
            </form>
            @endif
            <div class="product_details_cat_list mt-35">
              <div class="categories_label">
                <span>Categories:</span>
              </div>
              <ul>
                <li><a href="{{asset('shop/'.$Product->category_id)}}">{{$Product->category_name}}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--Realted Product section start-->
      <div class="related_product_section mt-100">

        <div class="row">
          <div class="col-12">
            <div class="section_title">
              <h2>Related Product</h2>
            </div>
          </div>
        </div>

        @if (count($relatedProducts) >3)

        <div class="row related_product_guttters owl-carousel mt-60">
          @else
          <div class="row mt-60">

            @endif
            @foreach ($relatedProducts as $product)
            @if (count($relatedProducts) >3)

            <div class="col-lg-3">

              @else
              <div class="col-lg-4">
                @endif
                <div class="single__product">
                  <div class="produc_thumb">
                    <a href="{{asset('product/'.$product->id)}}"><img src="{{asset("images/". $product->image)}}"
                        alt=""></a>
                  </div>
                  <div class="product_hover">
                    <div class="product__desc">
                      <h3><a href="{{asset('product/'.$product->id)}}">{{$product->name}}</a></h3>
                      <div class="price_amount">
                        @if ($product->discount != 0)
                        <span class="current_price">{{$product->price - (($product->discount * $product->price)/100)}}
                          JOD</span>
                        <span class="discount_price">-{{$product->discount}} %</span> <br>
                        <span class="old_price">{{$product->price}}JOD</span>
                        @else
                        <span class="current_price">{{$product->price}} JOD</span>
                        @endif
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              @endforeach

            </div>

          </div>
          <!--Realted Product section end-->
          <!-- Product Thumbnail Description Start -->
          <div class="product_desc_tab_container mt-100 ">

            <div class="thumb-desc-inner">
              <div class="row">
                <div class="col-sm-12">
                  <ul class="product_desc_tab nav" role="tablist">
                    <li><a class="active" data-toggle="tab" href="#review">Reviews </a></li>
                  </ul>

                  <!-- Product Thumbnail Tab Content Start -->
                  <div class="tab-content thumb-content mt-30">
                    <div id="review" class="tab-pane fade  show active">
                      <!-- Reviews Start -->
                      <div class="review">
                        <div class="group-title">
                          <h2>customer review</h2>
                        </div>
                      </div>
                      <!-- Reviews End -->
                      <!-- Reviews Start -->
                      @if (isset(session('loginUser')['id']) && session("loginUser")['role']=='customer')
                      <div class="review mt-20">
                        <!-- Reviews Field Start -->
                        <div class="riview-field mt-40">
                          <div class="review_comment_box_inner">
                            <form action="#" method="POST">
                              @csrf
                              <div class="form-group">
                                <label class="req" for="comments">Your Rate</label>
                                <select name="rate" style="width:10%; min-width: 40px; text-align: center">
                                  <option value="5">5</option>
                                  <option value="4">4</option>
                                  <option value="3">3</option>
                                  <option value="2">2</option>
                                  <option value="1">1</option>
                                </select>
                              </div>
                              <div class="form-group">
                                <label class="req" for="comments">Your Review</label>
                                <textarea rows="5" name="comment" id="comments" required="required"></textarea>
                              </div>
                              <button type="submit" name="submit" class="customer-btn">Submit</button>
                            </form>
                          </div>
                        </div>
                        <!-- Reviews Field Start -->
                      </div>
                      @endif

                      @foreach ($reviews as $review)
                      <div class="d-flex mt-5">
                        <div class="image-cropper">
                          <img src="{{asset("images/{$review->image}")}}" class="rounded" />
                        </div>


                        <div class="administrator_contnet">
                          <h4>{{ $review->name }}</h4>
                          <div>{!! str_repeat('<i class="fa fa-star" aria-hidden="true"></i>', $review->rate) !!}
                            {!! str_repeat('<i class="fa fa-star-o" aria-hidden="true"></i>', 5 - $review->rate) !!}
                          </div>
                          <p>{{ $review->comment }}</p>
                        </div>
                      </div>
                      <div class="myHr">
                        <hr>
                      </div>
                      @endforeach
                      <!-- Reviews End -->
                    </div>
                  </div>

                  <!-- Product Thumbnail Tab Content End -->
                </div>
              </div>

              <!-- Row End -->
            </div>
          </div>

        </div>
      </div>
      <!--product Details End-->
    </div>

    @endsection