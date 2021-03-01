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
						<li><a href="{{asset("/blog")}}">blog</a></li>
						<li><i class="zmdi zmdi-chevron-right"></i></li>
						<li>{{$blog->heading}}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<!--Breadcrumb section end-->



<!--Our blob page-->
<div class="our_blog_area single_blog right_sidebar ptb-100">
	<div class="container">
		<div class="row">
			<div class="col-lg-9 col-md-12 col-12">
				<div class="post_details_inner">
					<div class="single_post_thumbnail">
						<img src="{{asset('images/'.$blog->image)}}" alt="{{$blog->heading}}">
					</div>
					<div class="single_post_content">
						<div class="single_post_top_contnt">
							<div class="single_post_title">
								<h2>{{$blog->heading}}</h2>
							</div>
							<div class="single_post_meta">
								<div class="single_post_left_meta">
									<ul>
										<li></li>
										<li>By: {{$blog->name}}</li>
									</ul>
								</div>
							</div>
						</div>

						<div class="post_excerpt">
							<?php
                            echo str_replace("&nbsp;"," ",$blog->body);

                            ?>

						</div>


						<!--administrator start-->
						<div class="administrator">
							<div class="administrator_thumb">
								<img src="{{asset('images/'.$blog->customer_image)}}" alt="{{$blog->name}}">
							</div>
							<div class="administrator_contnet">
								<h4>{{$blog->name}}</h4>

							</div>
						</div>
						<!--administrator end-->
					</div>

					<!--Comment box -->
					<div class="comment_box_form mt-80">
						<div class="group-title">
							<h2>comments</h2>
						</div>
						@foreach ($comments as $comment)
						<div class="d-flex mt-5">
							<div class="image-cropper">
								<img src="{{asset("images/{$comment->image}")}}" class="rounded" />
							</div>

							<div class="administrator_contnet">
								<h4>{{ $comment->name }}</h4>
								<p>{{ $comment->comment }}</p>
							</div>
						</div>
						<hr>
						@endforeach
						<div class="comment_box_title">
							<h3>Leave A Comment</h3>
						</div>
						<div class="leave_comment_form">
							<form action="{{asset("blog/addComment")}}" method="post">
								@csrf
								<div class="text-areabox">
									<textarea placeholder="Type Your Comment *" name="comment"></textarea>
									@if ($errors->has('comment'))
									<div class="alert alert-danger">{{ $errors->first('comment') }}</div>
									@endif
								</div>
								<div class="submit_button_inner">
									<input type="hidden" name="id" value="{{$blog->id}}">
									<button type="submit">Submit Comment</button>
								</div>
							</form>
						</div>
					</div>
					<!--Comment box end-->

				</div>
			</div>
			<div class="col-lg-3 col-md-8 col-12">
				<div class="sidebar_right">

					<div class="sidebar_widget banner mb-65">
						<div class="sidebar_title">
							<h3>Search</h3>
						</div>
						<div class="sidebar_search">
							<div class="search_form">
								<form action="{{asset("blog/search")}}" method="post">
									@csrf
									<input type="text" name="search" placeholder="Search" />
									<button type="submit"><i class="zmdi zmdi-search"></i></button>
								</form>
							</div>
						</div>
					</div>

					<div class="sidebar_widget mb-50">
						<div class="widget_banner">
							<div class="single_banner">
								<a href="#"><img src="{{asset('assets/img/banner/5.jpg')}}" alt=""></a>
							</div>
							<br>
							<div class="single_banner">
								<a href="#"><img src="https://www.orange.jo/EN/PublishingImages/new_home/sliders/offer_slider4.png"></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</div>
@endsection