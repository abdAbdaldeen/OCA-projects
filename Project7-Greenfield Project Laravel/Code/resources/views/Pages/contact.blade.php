@extends('layouts.masterPage')

@section('contant')
<div>
                <!--Breadcrumb section-->
                <div class="breadcrumb_section" >
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="breadcrumb_inner">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><i class="zmdi zmdi-chevron-right"></i></li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Breadcrumb section end-->
                
               <!--Contact us start-->
                   <div class="contact-us pt-110 pb-100">
                       <div class="container">
                           <div class="row">
                               <div class="col-lg-6 col-md-12 col-12">
                                   <div class="contact-us-desc">
                                        <div class="get-in-touch">
                                           <h3>get in touch</h3>
                                           <p>Exporso is a company started by five people in Amman-jordan it's about giving the customer the best bike for the best price.
                                           </p>
                                        </div>
                                        <div class="contact-social">
                                            <a href="#"><i class="zmdi zmdi-facebook"></i></a>
                                            <a href="#"><i class="zmdi zmdi-instagram"></i></a>
                                            <a href="#"><i class="zmdi zmdi-rss"></i></a>
                                            <a href="#"><i class="zmdi zmdi-twitter"></i></a>
                                            <a href="#"><i class="zmdi zmdi-pinterest"></i></a>
                                        </div>
                                        <div class="contact-address">
                                            <h3>address</h3>
                                            <div class="contact-list">
                                                <div class="single-contact-list">
                                                    <div class="contact-icon">
                                                        <i class="zmdi zmdi-pin"></i>
                                                    </div>
                                                    <div class="conatct-desc">
                                                        <p>Jordan , Amman</p>
                                                    </div>
                                                </div>
                                                <div class="single-contact-list">
                                                    <div class="contact-icon">
                                                        <i class="zmdi zmdi-phone"></i>
                                                    </div>
                                                    <div class="conatct-desc">
                                                           <span> +962 777777777 </span>
                                                    </div>
                                                </div>
                                                <div class="single-contact-list">
                                                    <div class="contact-icon">
                                                        <i class="zmdi zmdi-email"></i>
                                                    </div>
                                                    <div class="conatct-desc">
                                                        <p>info@example.com </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                   </div>
                               </div>
                               <div class="col-lg-6 col-md-12 col-12">
                                   <div class="map-area">
                                      <div id="googleMap">
                                      <img src="https://techbeacon.com/sites/default/files/styles/social/public/field/image/google-location-privacy.jpg?itok=g3oTUeP2"   style="width:100%;height: 20rem;" alt="">
                                   </div>
                                </div>
                               </div>
                           </div>
                        </div>
                   </div>
                   <!--Contact us end-->

</div>
                 @endsection