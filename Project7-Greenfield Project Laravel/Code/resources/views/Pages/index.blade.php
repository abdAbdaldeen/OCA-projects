@extends('layouts.masterPage')

@section('contant')
<!-- slider-area-start -->
<div class="slider_wrapper" id="upHome">
	<div class="slider-active owl-carousel">
		<!--Single Slide-->
		<div class="single__slider bg-opacity" style="background-image:url(assets/img/slide/1.jpg)">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-6 col-md-6">
						<div class="slider-content slider-text-animation">
							<h1>Best Deal</h1>
							<h2>15% - 25% Off</h2>
							<p>Don't miss the chance to get the best bike for the best price. </p>
							<a href="shop" class="btn-slider">Buy Now</a>
						</div>
					</div>
					<div class="col-lg-6 col-md-6">
						<div class="slider_layer_image">
							<img src="assets/img/slide/layer_img_1.png" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--Single slide end-->
		<!--Single Slide-->
		<div class="single__slider bg-opacity slider__2" style="background-image:url(assets/img/slide/2.jpg)">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-4 col-md-5">
						<div class="slider-content slider-text-animation">
							<h1>BIG DEAL</h1>
							<h2>20% Off</h2>
							<p>For Black Friday</p>
							<a href="#">Buy Now</a>
						</div>
					</div>
					<div class="col-lg-8 col-md-7">
						<div class="slider_layer_image">
							<img src="assets/img/slide/layer_img_2.png" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--Single slide end-->
		<!--Single Slide-->
		<div class="single__slider bg-opacity" style="background-image:url(assets/img/slide/1.jpg)">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-6 col-md-6">
						<div class="slider-content slider-text-animation">
							<h1>Best Deal</h1>
							<h2>15% - 25% Off</h2>
							<p>Don't miss the chance to get the best bike for the best price. </p>

							<a href="shop">Buy Now</a>
						</div>
					</div>
					<div class="col-lg-6 col-md-6">
						<div class="slider_layer_image">
							<img src="assets/img/slide/layer_img_1.png" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--Single slide end-->
	</div>
</div>
<!-- slider-area-end -->
<!--Banner area start-->
<div class="hot_details_product pt-70 pb-40" id="category">
	<div class="banner_area">
		<div class="banner_area_inner d-flex">
			@foreach ($Categories as $Category)
			<div class="col_4">
				<div class="single_banner">
					<a href="shop/{{$Category->id}}"><img src="{{asset("images/".$Category->image)}}" alt=""></a>
				</div>
			</div>
			@endforeach
		</div>
	</div>
</div>
<!--Banner area end-->


<!--Hot Deal product start-->
<div class="hot_details_product pt-40 pb-70" id="hotProduct">
	<div class="container">
		<div class="row align-items-end">
			<div class="col-lg-3 col-md-3 col-12">
				<div class="section_title">
					<h2>Hot Deals</h2>
				</div>
			</div>

		</div>
		<div class="row mt-60">
			<div class="col-lg-9 col-md-12 ">
				<div class="tab-content">
					<div class="tab-pane active  fade" role="tabpanel">
						<div class="row">
							@foreach ($DiscountProducts as $Product)
							<div class="col-lg-4 col-md-6">
								<div class="single__product" style="height: 22rem;">
									<div class="produc_thumb">
										<a href="product/{{$Product['id']}}"><img src="{{asset("images/".$Product->image)}}" alt=""></a>
									</div>
									<div class="product_hover">
										<div class="product__desc">
											<div class="price_amount">
												<span class="discount_price discount_index">- {{$Product->discount}} %</span>
											</div>
											<h3><a href="product/{{$Product['id']}}">{{$Product->name}}</a></h3>
											<div class="price_amount">
												<span class="current_price">
													{{($Product->price)-(($Product->discount/100)*($Product->price))}} JOD</span>
												<span class="old_price">{{$Product->price}} JOD</span>
											</div>
											<a href="product/{{$Product['id']}}" class="btn btn_show">Show</a>
										</div>
									</div>
								</div>
							</div>
							@endforeach
						</div>
					</div>
				</div>

			</div>
			<div class="col-lg-3 col-md-12">
				<div class="single_banner long_hot_detals d-lg-none">
					<a href="#"><img src="https://pbs.twimg.com/media/EtxzAMUXMAEKhJA.jpg" alt="Shop Banner"></a>
				</div>
				<div class="single_banner long_hot_detals d-none d-lg-block divImageOrange">
					<a href="#"><img src="images/orange.jpg" class="imageOrange" alt="Shop Banner"></a>
				</div>
				<div class="single_banner long_hot_detals d-none d-lg-block pt-20">
					<a href="#"><img src="https://www.orange.com/sites/orangecom/files/2020-10/UK_OM_480X270_07-.png"
							alt="Shop Banner"></a>
				</div>
			</div>
		</div>
	</div>
</div>
<!--Hot Deal product end-->


<!--Hot Deal product start-->
<div class="hot_details_product">
	<div class="container" id="bestProduct">
		<div class="row align-items-end">
			<div class="col-lg-3 col-md-3 col-12">
				<div class="section_title">
					<h2>Best Product</h2>
				</div>
			</div>
		</div>
		<div class="row mt-60">
			<div class="col-lg-12 col-md-12 ">
				<div class="tab-content">
					<div class="tab-pane active show fade" role="tabpanel">
						<div class="row carousel_product owl-carousel">
							@foreach ($HotProducts as $Product)
							<div class="col-lg-4 col-md-6">
								<div class="single__product" style="height: 22rem;">
									<div class="produc_thumb">
										<a href="product/{{$Product['id']}}"><img src="{{asset("images/".$Product->image)}}" alt=""></a>
									</div>
									<div class="product_hover">
										<div class="price_amount">
											<h3><a href="product/{{$Product['id']}}">{{$Product->name}}</a></h3>
											@if ($Product->discount != 0)
											<span class="discount_price dis_HotProducts">-{{$Product->discount}} %</span>
											<span class="current_price">{{$Product->price - (($Product->discount * $Product->price)/100)}}
												JOD</span>
											<span class="old_price">{{$Product->price}} JOD</span>
											@else
											<span class="current_price">{{$Product->price}} JOD</span>
											@endif
											<a href="product/{{$Product['id']}}" class="btn btn_show">Show</a>
										</div>
									</div>
								</div>
							</div>
							@endforeach
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--Hot Deal product end-->


	<!--Full Width  banner start-->
	<div class="full_width_banner pt-110">
		<div class="single_banner">
			<a href="#"><img src="assets/img/banner/8.jpg" alt="Shop Banner"></a>
		</div>
	</div>
	<!--Full Width Banner end-->
</div>
@endsection