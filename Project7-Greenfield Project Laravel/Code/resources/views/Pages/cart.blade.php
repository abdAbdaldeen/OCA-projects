@extends('layouts.masterPage')

@section('contant')
<!--Breadcrumb section-->
<div class="breadcrumb_section">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="breadcrumb_inner">
          <ul>
            <li><a href="{{asset("/")}}">Home</a></li>
            <li><i class="zmdi zmdi-chevron-right"></i></li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<!--Breadcrumb section end-->

<!-- PAGE SECTION START -->
<div class="cart_page_area pt-100 pb-60">
  <form action="{{asset('update')}}" method="post">
    @csrf
    <div class="container">
      <div class="row">

        <div class="col-12">
          <div class="cart-table table-responsive mb-40">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th class="pro-thumbnail">Image</th>
                  <th class="pro-title">Product</th>
                  <th class="pro-price">Price</th>
                  <th class="pro-quantity">Quantity</th>
                  <th class="pro-subtotal">Total</th>
                  <th class="pro-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                @foreach ($cartDetails as $item)
                <tr>
                  <td class="pro-thumbnail"><a href="#"><img src="{{asset('images/'.$item["product"]->image)}}"
                        alt="" /></a></td>
                  <td class="pro-title"><a href="#">{{$item["product"]->name}}</a></td>
                  <td class="pro-price"><span class="amount">{{$item["product"]->price}} JOD</span></td>
                  <td class="pro-quantity">
                    <div class="product-quantity"><input type="number" value="{{$item["qty"]}}"
                        name="{{$item["product"]->id}}" /></div>
                  </td>
                  <td class="pro-subtotal">{{$item["product"]->price * $item["qty"]}} JOD</td>
                  <td class="pro-remove"><a href="{{asset('cart/delete/'.$item["product"]->id)}}">×</a></td>
                </tr>
                @endforeach
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-md-8 col-12">
          <div class="cart-buttons mb-30">
            <input type="submit" value="Update Cart" />
            <a href="shop">Continue Shopping</a>
          </div>

        </div>
        <div class="col-md-4 col-12">
          <div class="cart-total mb-40">
            <h3>Cart Totals</h3>
            <div class="table-responsive">
              <table>
                <tbody>
                  <tr class="order-total">
                    <th>Total</th>
                    <td>
                      <strong><span class="amount">{{$total}} JOD</span></strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="proceed-to-checkout section mt-30">
              <a href="checkout" style="background-color: #f6563c;">Proceed to Checkout</a>
            </div>
          </div>
        </div>


      </div>
    </div>
  </form>
</div>
<!-- PAGE SECTION END -->

@endsection