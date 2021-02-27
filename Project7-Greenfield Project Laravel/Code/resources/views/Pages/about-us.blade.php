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
                        <li>About us</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<!--Breadcrumb section end-->

<!--About us start-->
<div class="about-us bg-gray mt-110 mb-105">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="about-description">
                    <div class="about-content">
                        <h3>about us</h3>
                        <div class="about-read">
                            <p class="text-1">
                                We could tell you all about how, as an award-winning retailer, we are the leading bikes
                                supermarket in Jordan, that we have thousands of bikes in stock, or even how we make
                                sure our bikes are the most competitively-priced in the country with our Price Match
                                Promise... but instead, we’ve produced this short video for you to watch.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="about-fun-fact">
        <div class="about-fun-fact-inner white-overlay">
            <div class="fun-factor">
                <div class="row">
                    <div class="col-lg-6 col-md-6  mb-100">
                        <div class="single-fun-fact text-center">
                            <div class="fun-icon">
                                <i class="zmdi zmdi-check-circle"></i>
                            </div>
                            <div class="fun-text">
                                <h2>Successfull work</h2>
                                <h3 class="counter">290</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 mb-100">
                        <div class="single-fun-fact text-center">
                            <div class="fun-icon">
                                <i class="zmdi zmdi-account-circle"></i>
                            </div>
                            <div class="fun-text">
                                <h2>Happy People</h2>
                                <h3 class="counter">990</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 ">
                        <div class="single-fun-fact text-center">
                            <div class="fun-icon">
                                <i class="zmdi zmdi-truck"></i>
                            </div>
                            <div class="fun-text">
                                <h2>Freight Vehicles</h2>
                                <h3 class="counter">120</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 ">
                        <div class="single-fun-fact text-center">
                            <div class="fun-icon">
                                <i class="zmdi zmdi-badge-check"></i>
                            </div>
                            <div class="fun-text">
                                <h2>Award Winning</h2>
                                <h3 class="counter">499</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--About us end-->

<!--Our Team section start-->
<div class="our_team_area pb-80">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section_title">
                    <h2>Our Team</h2>
                </div>
            </div>
        </div>
        <div class="row no-gutters mt-60 d-flex justify-content-center">
            <!-- Start Single Team -->
            <div class="col-lg-2 col-md-6 col-6" style="margin: 0.5rem;">
                <div class="single_team mb-30">
                    <div class="team__thumb">
                        <a href="#">
                            <img src="{{asset('images/3.png')}}" alt="team images">
                        </a>
                    </div>
                    <div class="team__hover__info">
                        <div class="team__hover__action">
                            <h2><a href="#">Mohohammad AL-agi</a> <br> <small>Product Owner</small> </h2>
                            <ul class="social__icon">
                                <li><a href="https://github.com/MohammedAL-Agi" target="_blank"><i
                                            class="zmdi zmdi-github-alt"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/mohammed-alagi/" target="_blank"><i
                                            class="zmdi zmdi-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Single Team -->
            <!-- Start Single Team -->

            <!-- End Single Team -->
            <!-- Start Single Team -->
            <div class="col-lg-2 col-md-6 col-6" style="margin: 0.5rem;">
                <div class="single_team mb-30">
                    <div class="team__thumb">
                        <a href="#">
                            <img src="{{asset('images/5.png')}}" alt="team images">
                        </a>
                    </div>
                    <div class="team__hover__info">
                        <div class="team__hover__action">
                            <h2><a href="#">Jenan Musallam</a><br> <small>Developer</small></h2>
                            <ul class="social__icon">
                                <li><a href="https://github.com/Jenanmusallam" target="_blank"><i
                                            class="zmdi zmdi-github-alt"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/jenan-musallam-1ab920104/" target="_blank"><i
                                            class="zmdi zmdi-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- End Single Team -->
            <div class="col-lg-2 col-md-6 col-6" style="margin: 0.5rem;">
                <div class="single_team mb-30">
                    <div class="team__thumb">
                        <a href="#">
                            <img src="{{asset('images/1.png')}}" alt="team images">
                        </a>
                    </div>
                    <div class="team__hover__info">
                        <div class="team__hover__action">
                            <h2><a href="#">Abdel rahman Abdaldeen</a> <br>
                                <small>Scrum Master</small> </h2>
                            <ul class="social__icon">
                                <li><a href="https://github.com/abdAbdaldeen" target="_blank"><i
                                            class="zmdi zmdi-github-alt"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/abd-abdaldeen/" target="_blank"><i
                                            class="zmdi zmdi-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Start Single Team -->
            <div class="col-lg-2 col-md-6 col-6" style="margin: 0.5rem;">
                <div class="single_team mb-30">
                    <div class="team__thumb">
                        <a href="#">
                            <img src="{{asset('images/2.png')}}" alt="team images">
                        </a>
                    </div>
                    <div class="team__hover__info">
                        <div class="team__hover__action">
                            <h2><a href="#">Anas Jawabrah</a><br> <small>Developer</small></h2>
                            <ul class="social__icon">
                                <li><a href="https://github.com/anasJawabrah" target="_blank"><i
                                            class="zmdi zmdi-github-alt"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/anas-aljawa/" target="_blank"><i
                                            class="zmdi zmdi-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Single Team -->

            <!-- Start Single Team -->
            <div class="col-lg-2 col-md-6 col-6" style="margin: 0.5rem;">
                <div class="single_team mb-30">
                    <div class="team__thumb">
                        <a href="#">
                            <img src="{{asset('images/4.png')}}" alt="team images">
                        </a>
                    </div>
                    <div class="team__hover__info">
                        <div class="team__hover__action">
                            <h2><a href="#">Mohammad Alzoubi</a><br> <small>Developer</small></h2>
                            <ul class="social__icon">
                                <li><a href="https://github.com/Mohammad-Alzoubi" target="_blank"><i
                                            class="zmdi zmdi-github-alt"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/mohammad-alzoubi/" target="_blank"><i
                                            class="zmdi zmdi-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Single Team -->

        </div>
    </div>
</div>
<!--Our Team section End-->



<!--Testimonail start -->
<div class="testimonial white-overlay">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                <div class="testimonial_list owl-carousel">
                    <div class="testmonial-inner text-center">
                        <div class="test-content">
                            <p>Exporso is a company that provides tools to help professional event planning and
                                execution, and their customers are very happy folks! The thing I love about their
                                customer testimonial page is that it provides a variety of content formats. </p>
                        </div>
                        <div class="test-title">
                            <h5>Mohammad Alzoubi</h5>
                            <h6>Devloper</h6>
                        </div>
                    </div>
                    <div class="testmonial-inner text-center">
                        <div class="test-content">
                            <p>Startup Institute used their business model to create a unique and compelling way to
                                display their customer testimonials as “Love Letters.” </p>
                        </div>
                        <div class="test-title">
                            <h5>Anas Jawabrah</h5>
                            <h6>Designer</h6>
                        </div>
                    </div>
                    <div class="testmonial-inner text-center">
                        <div class="test-content">
                            <p> Its simple design focuses on videos and standout quotes from customers. This approach is
                                clean, straightforward, and skimmable—not bogged down with big blocks of text that can
                                be overwhelming and easy to skip. </p>
                        </div>
                        <div class="test-title">
                            <h5>Abdel rahamn Abdaldeen</h5>
                            <h6>ceo</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--Testimonail end-->

<!--Brand carousel start -->
<div class="brand-area white-bg ptb-90">
    <div class="container">
        <!-- Brand Logo Active Start Here -->
        <div class="brand_carousel_active owl-carousel">
            <div class="single_brand">
                <a href="#"><img src="assets/img/brand/b1.jpg" alt="brand-image"></a>
            </div>
            <div class="single_brand">
                <a href="#"><img src="assets/img/brand/b2.jpg" alt="brand-image"></a>
            </div>
            <div class="single_brand">
                <a href="#"><img src="assets/img/brand/b3.jpg" alt="brand-image"></a>
            </div>
            <div class="single_brand">
                <a href="#"><img src="assets/img/brand/b4.jpg" alt="brand-image"></a>
            </div>
            <div class="single_brand">
                <a href="#"><img src="assets/img/brand/b5.jpg" alt="brand-image"></a>
            </div>
            <div class="single_brand">
                <a href="#"><img src="assets/img/brand/b3.jpg" alt="brand-image"></a>
            </div>
            <div class="single_brand">
                <a href="#"><img src="assets/img/brand/b1.jpg" alt="brand-image"></a>
            </div>
        </div>
        <!-- Brand Logo Active End Here -->
    </div>
</div>
<!--Brand carousel end-->
@endsection