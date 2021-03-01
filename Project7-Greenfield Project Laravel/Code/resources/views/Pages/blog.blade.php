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
						<li>Blog</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<!--Breadcrumb section end-->
<!-- Add Bolg -->
@if (isset(session("loginUser")['id'])&& session("loginUser")['role']=='customer')

<div class="d-flex justify-content-center pt-60">
	<div class="submit_button_inner">
		<button type="submit"><a href="{{asset("blog/add")}}" style="color: white;">
				<div id="div1" class="fa" style="font-size: 1.4rem; margin: 0rem 0.6rem 0rem 0rem;"></div>
				Add Blog
			</a>
		</button>
		<script>
			function hand() {
                var a;
                a = document.getElementById("div1");
                a.innerHTML = " &#xf055;";
                setTimeout(function () {
                    a.innerHTML = "&#xf0fe;";
                }, 300);
                setTimeout(function () {
                    a.innerHTML = "&#xf055;";
                    //   &#xf057;
                    // &#xf00d;
                }, 600);
                setTimeout(function () {
                    a.innerHTML = "&#xf0fe;";
                }, 900);
            }
            hand();
            setInterval(hand, 1800);
		</script>
	</div>
</div>
<!--End Add Bolg -->
@endif

<!--shop area start-->
<div class="blog_area pt-70 pb-70">
	<div class="container">
		<div class="row">
			@foreach($blogs as $blog)
			<div class="col-lg-4 col-md-6">
				<a href="/blog/{{$blog->id}}">
					<div class="single_blog_post mb-40">
						<div class="post_thumbnail">
							<a href="/blog/{{$blog->id}}">
								<div class="blogImg" style="background-image: url('{{asset('images/'.$blog->image)}}')">
								</div>
								{{-- <img src="{{asset('images/'.$blog->image)}}" alt="{{$blog->heading}}"> --}}
							</a>
						</div>
						<div class="post_content_meta" style="{{$blog->state == "Pending" ? "background-color:#fcffa1" :""}}">
							<div class="blog_post_desc">
								<h2><a href="/blog/{{$blog->id}}">{{$blog->heading}}
										{{$blog->state == "Pending" ? " | Pending" :""}}</a></h2>
							</div>
							<div class="read_more_btn">
								<a href="/blog/{{$blog->id}}">Read More <span><i class="zmdi zmdi-arrow-right"></i></span></a>
							</div>
						</div>
					</div>
				</a>
			</div>

			@endforeach


		</div>

		<div class="row pagination_box mt-30">
			<div class="col-12">
				{{$blogs->links()}}
			</div>
		</div>
	</div>
</div>
<!--shop area end-->
@endsection