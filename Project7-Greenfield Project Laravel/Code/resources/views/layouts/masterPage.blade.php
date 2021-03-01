<!doctype html>
<html class="no-js" lang="zxx">

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Exporso - Bike/Car/Auto Parts</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Favicon -->
  <link rel="shortcut icon" type="image/x-icon" href="{{asset('/assets/img/favicon.png')}}">

  <!-- all css here -->
  <link rel="stylesheet" href="{{asset('/assets/css/bootstrap.min.css')}}">
  <link rel="stylesheet" href="{{asset('/assets/css/plugin.css')}}">
  <link rel="stylesheet" href="{{asset('/assets/css/bundle.css')}}">
  <link rel="stylesheet" href="{{asset('/assets/css/style.css')}}">
  <link rel="stylesheet" href="{{asset('/assets/css/responsive.css')}}">
  <link rel="stylesheet" href="{{asset('/assets/css/my-css.css')}}">

  <script src="{{asset('/assets/js/vendor/modernizr-2.8.3.min.js')}}"></script>
</head>

<body>
  <!-- Add your site or application content here -->

  <div class="exporso_wrapper">
    <header>
      <div class="header_middle">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-3 col-md-3">
              <div class="logo">
                <a href="index"><img src="{{asset('/assets/img/logo/logo.png')}}" alt="exporso logo"></a>
              </div>
            </div>
            <div class="col-lg-7 col-md-8">
              <div class="category_search">
                <form action="{{ route('search') }}" method="GET">
                  <div class="category_search_inner">
                    <div class="search">
                      <input type="text" placeholder="Search..." name="search">
                    </div>
                    <div class="submit">
                      <button type="submit"><i class="zmdi zmdi-search"></i></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-2 col-md-1">
              @if (!isset(session("loginUser")['id'])||session("loginUser")['role']=='customer')
              <div class="mini_cart_box_wrapper text-right">
                <a href="{{asset('cart')}}">
                  <img src="{{asset('/assets/img/icon/cart.png')}}" alt="Mini Cart Icon">
                  <?php
                  $cart= session()->get("cart");
                  if ($cart)
                  $count = count($cart);
                  else
                  $count = 0;
                  ?>
                  <span class="cart_count">{{$count}}</span>
                </a>
              </div>
              @endif

            </div>
          </div>
        </div>
      </div>
      <div class="header_bottom">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-12">
              <div class="menu d-none d-lg-block ">
                <nav>
                  <ul>
                    <li><a href="{{asset('index')}}">HOME</a>
                    </li>
                    <li><a href="{{asset('about')}}">About</a></li>
                    <li><a href="{{asset('shop')}}">Shop</a>
                    </li>
                    <li><a href="{{asset('blog')}}">Blog</a>
                    </li>
                    <li><a href="{{asset('contact')}}">CONTACT </a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <div class="header_right_info">
                <ul>
                  @if(!isset(session("loginUser")['id']))
                  <li><a href="{{asset('login')}}">Login</a></li>
                  @else
                  @if(session("loginUser")['role']=='customer')
                  <li><a href="{{asset('my-account')}}">My Account</a></li>
                  @else
                  <li><a href="{{asset('admin')}}">Admin Dashboard</a></li>
                  <li><a href="{{asset('logout')}}">Logout</a></li>
                  @endif
                  @endif
                </ul>
              </div>
            </div>
            <div class="col-12 d-lg-none">
              <!--Mobile menu murkup start-->
              <div class="mobile-menu-area d-lg-none">
                <div class="mobile-menu clearfix">
                  <nav>
                    <ul>
                      <li><a href="{{asset('index')}}">HOME</a>
                      </li>
                      <li><a href="{{asset('about')}}">About</a></li>
                      <li><a href="{{asset('shop')}}">Shop</a></li>
                      <li><a href="{{asset('blog')}}">Blog</a>
                      </li>
                      <li><a href="{{asset('contact')}}">CONTACT </a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <!--Mobile menu murkup End-->
            </div>
          </div>
        </div>
      </div>
    </header>

    {{-- //*************************************************************************** --}}
    <main>
      @yield('contant')
    </main>
    {{-- //*************************************************************************** --}}


    <!--Footer start-->
    <footer class="footer_area">
      <div class="footer_top">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="our_help_services ptb-80">
                <div class="row">
                  <div class="col-lg-4 col-md-6 col-12">
                    <div class="help_service d-flex">
                      <div class="h_ser_icon">
                        <i class="zmdi zmdi-boat"></i>
                      </div>
                      <div class="h_ser_text">
                        <h3>Free Shipping</h3>
                        <p>Free Shipping on Bangladesh</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-12">
                    <div class="help_service d-flex justify-content-center">
                      <div class="h_ser_icon">
                        <i class="zmdi zmdi-shield-security"></i>
                      </div>
                      <div class="h_ser_text">
                        <h3>Money Guarentee</h3>
                        <p>Free Shipping on Bangladesh</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-12">
                    <div class="help_service d-flex justify-content-end">
                      <div class="h_ser_icon">
                        <i class="zmdi zmdi-phone-setting"></i>
                      </div>
                      <div class="h_ser_text">
                        <h3>Online Support</h3>
                        <p>Free Shipping on Bangladesh</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_bottom ptb-80">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="single_footer widget_description">
                <p>Exporso is a company started by five people in Amman-jordan it's about giving the customer the best
                  bike for the best price.</p>
                <p>Love Power Passion Exporso.</p>
                <div class="addresses_inner">
                  <div class="single_address">
                    <p>
                      <span> Address: </span> <span>Jordan - Amman</span>
                    </p>

                    <p>
                      <span> Phone: </span> <span>+962 777777777 </span>
                    </p>
                  </div>
                </div>
                <div class="social__icon">
                  <ul>
                    <li>
                      <a class="facebook" href="#" title="Facebook"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a class="google-plus" href="#" title="Google Plus"><i class="fa fa-google-plus"></i></a>
                    </li>

                    <li>
                      <a class="twitter" href="#" title="Twitter"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a class="linkedin" href="#" title="Linkedin"><i class="fa fa-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single_footer footer_widget_menu">
                <div class="widget_title">
                  <h3>Page</h3>
                </div>
                <ul>
                  <li><a href="{{asset('index')}}">Home</a></li>
                  <li><a href="{{asset('about')}}">About</a></li>
                  <li><a href="{{asset('shop')}}">Shop </a></li>
                  <li><a href="{{asset('contact')}}">Contact</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="single_footer footer_widget_menu">
                <div class="widget_title">
                  <h3>Home</h3>
                </div>
                <ul>
                  <li><a href="{{asset('index#upHome')}}">Landing Page</a></li>
                  <li><a href="{{asset('index#hotProduct')}}">Hot Product</a></li>
                  <li><a href="{{asset('index#bestProduct')}}">Best Product</a></li>
                  <li><a href="{{asset('index#category')}}">Category</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="copyright_inner text-center">
                <p>Copyright © All Right Reserved </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!--Footer end-->



  </div>




  <!-- all js here -->
  <script src="{{asset('/assets/js/vendor/jquery-1.12.0.min.js')}}"></script>
  <script src="{{asset('/assets/js/popper.js')}}"></script>
  <script src="{{asset('/assets/js/bootstrap.min.js')}}"></script>
  <script src="{{asset('/assets/js/plugins.js')}}"></script>
  <script src="{{asset('/assets/js/main.js')}}"></script>
</body>

</html>