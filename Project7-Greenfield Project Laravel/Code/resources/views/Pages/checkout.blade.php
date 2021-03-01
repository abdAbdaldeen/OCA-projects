@extends('layouts.masterPage')

@section('contant')
<div class="breadcrumb_section">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="breadcrumb_inner">
					<ul>
						<li><a href="{{asset("/")}}">Home</a></li>
						<li><i class="zmdi zmdi-chevron-right"></i></li>
						<li>Checkout</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<!--Breadcrumb section end-->

<!-- checkout-area start -->
<div class="checkout-area ptb-100">
	<div class="container">
		<form action="" method="post">
			<div class="row">

				<div class="col-lg-6 col-md-12 col-12">
					<form method="POST">
						@csrf
						<div class="checkbox-form">
							<h3>Billing Details</h3>
							<div class="row">
								<div class="col-md-12">
									<div class="checkout-form-list">
										<label> Name </label>
										{{-- <input type="text" value="{{$customer->name}}" disabled /> --}}
										<p>{{$customer->name}}</p>

									</div>
								</div>

								<div class="col-md-6">
									<div class="checkout-form-list">
										<label>Email </label>
										{{-- <input type="email" value="{{$customer->email}}" disabled /> --}}
										<p>{{$customer->email}}</p>

									</div>
								</div>
								<div class="col-md-6">
									<div class="checkout-form-list">
										<label>Phone <span class="required">*</span></label>
										@if ($customer->phone =='Add phone number')
										<input type="text" name='phone' />
										@if ($errors->has('phone'))
										<div class="alert alert-danger">{{ $errors->first('phone') }}</div>
										@endif
										<input type="hidden" name="phoneRequired" value="1">
										@else
										<p>{{$customer->phone}}</p>

										@endif
									</div>
								</div>
								<div class="col-md-12">
									<div class="checkout-form-list">
										<label>Address <span class="required">*</span></label>
										<input type="text" name="address" placeholder="City / st." />
										@if ($errors->has('address'))
										<div class="alert alert-danger">{{ $errors->first('address') }}</div>
										@endif
									</div>
								</div>
							</div>
							<div class="different-address">
								<div class="order-notes">
									<div class="checkout-form-list mrg-nn">
										<label>Order Notes</label>
										<textarea id="checkout-mess" cols="30" rows="10"
											placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
				<div class="col-lg-6 col-md-12 col-12">
					<div class="your-order">
						<h3>Your order</h3>
						<div class="your-order-table table-responsive">
							<table>
								<thead>
									<tr>
										<th class="product-name">Product</th>
										<th class="product-total">Total</th>
									</tr>
								</thead>
								<tbody>
									@foreach ($cartDetails as $item)
									<tr class="cart_item">
										<td class="product-name">
											{{$item["product"]->name}} <strong class="product-quantity"> × {{$item["qty"]}}</strong>
										</td>
										<td class="product-total">
											<span class="amount">{{$item["product"]->price * $item["qty"]}} JOD</span>
										</td>
									</tr>
									@endforeach
								</tbody>
								<tfoot>
									<tr class="order-total">
										<th>Order Total</th>
										<td><strong><span class="amount">{{$total}} JOD</span></strong>
										</td>
									</tr>
								</tfoot>
							</table>
						</div>
						<div class="payment-method">
							<div class="payment-accordion">
								<div class="panel-group" id="faq">
									<div class="panel panel-default">
										<div class="panel-heading">
											<h5 class="panel-title"><a class="collapsed" data-toggle="collapse" aria-expanded="false"
													data-parent="#faq" href="#payment-2">Cash on Delivery</a></h5>
										</div>
									</div>

								</div>
								<div class="order-button-payment">
									<a href="my-account"> <input style="background-color: #f6563c;" type="submit"
											value="Place order" /></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>

@endsection