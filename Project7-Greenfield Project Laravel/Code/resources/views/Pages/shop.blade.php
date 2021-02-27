@extends('layouts.masterPage')

@section('contant')
<!--Breadcrumb section-->
<div class="breadcrumb_section">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="breadcrumb_inner">
					<ul>
						<li><a href="/">Home</a></li>
						<li><i class="zmdi zmdi-chevron-right"></i></li>
						<li>Shop</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<!--Breadcrumb section end-->

<!--shop area start-->
<div class="shop_area ptb-100">
	<div class="container">
		<div class="row">
			<div class="col-lg-3 col-md-8 col-12">
				<div class="shop_sidebar">

					<div class="sidebar_widget mb-50">
						<div class="widget_title">
							<h3>Categories</h3>
						</div>
						<div class="widget_categories">
							<ul>
								@foreach ($Categories as $Category)
								<li> <a href="{{asset('shop/'.$Category->id)}}">{{$Category->name}}</a></li>
								@endforeach
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-9 col-md-12 col-12 shop_details">
				<div class="row">
					<div class="col-12">
						<div class="tab-content">
							<div class="tab-pane active show fade" role="tabpanel">
                                <div class="row">
                                    @foreach ($Products as $Product)
                                        @if($Product->discount != 0)
                                            <div class="col-lg-4 col-md-6 col-12" style="padding-bottom: 2rem;">
                                                <div class="single__product" style="height: 19rem;">
                                                    <span class="pro_badge">Sale</span>
                                                    <div class="produc_thumb">
                                                        <a href="{{asset('product/'.$Product['id'])}}"><img src="{{asset("images/".$Product->image)}}"
                                                                                                            alt=""></a>
                                                    </div>
                                                    <div class="product_hover">
                                                        <div class="product__desc">
                                                            <h3><a href="{{asset('product/'.$Product['id'])}}">{{$Product->name}}</a></h3>
                                                            <div class="price_amount">
                            <span class="current_price">
                              {{($Product->price)-(($Product->discount/100)*($Product->price))}}JD</span>
                                                                <span class="discount_price">-{{$Product->discount}}%</span>
                                                                <span class="old_price">{{$Product->price}}JD</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        @else
                                            <div class="col-lg-4 col-md-6 col-12" style="padding-bottom: 2rem;">
                                                <div class="single__product" style="height: 19rem;">
                                                    <div class="produc_thumb">
                                                        <a href="{{asset('product/'.$Product['id'])}}"><img src="{{asset("images/".$Product->image)}}"
                                                                                                            alt=""></a>
                                                    </div>
                                                    <div class="product_hover">
                                                        <div class="product__desc">
                                                            <h3><a href="{{asset('product/'.$Product['id'])}}">{{$Product->name}}</a></h3>
                                                            <div class="price_amount">
                                                                <span class="current_price">{{$Product->price}}JD</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        @endif
                                    @endforeach
                                </div>
							</div>
						</div>
					</div>
				</div>
				<div class="row pagination_box mt-70">
					<div class="col-12">
                        {{$Products->links()}}

                    </div>
				</div>
			</div>
		</div>


	</div>
</div>
<!--shop area end-->

@endsection
