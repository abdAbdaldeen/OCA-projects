<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="{{asset('adminAssets/vendor/bootstrap/css/bootstrap.min.css')}}">
  <link href="{{asset('adminAssets/vendor/fonts/circular-std/style.css')}}" rel="stylesheet">
  <link rel="stylesheet" href="{{asset('adminAssets/libs/css/style.css')}}">
  <link rel="stylesheet" href="{{asset('adminAssets/vendor/fonts/fontawesome/css/fontawesome-all.css')}}">
  <link rel="stylesheet" href="{{asset('adminAssets/vendor/charts/chartist-bundle/chartist.css')}}">
  <link rel="stylesheet" href="{{asset('adminAssets/vendor/charts/morris-bundle/morris.css')}}">
  <link rel="stylesheet"
    href="{{asset('adminAssets/vendor/fonts/material-design-iconic-font/css/materialdesignicons.min.css')}}">
  <link rel="stylesheet" href="{{asset('adminAssets/vendor/charts/c3charts/c3.css')}}">
  <link rel="stylesheet" href="{{asset('adminAssets/vendor/fonts/flag-icon-css/flag-icon.min.css')}}">
  <title>Concept - Bootstrap 4 Admin Dashboard Template</title>
  {{-- ========================= --}}
  <link rel="stylesheet" href="{{asset('adminAssets/mycss.css')}}">
</head>

<body>
  <!-- ============================================================== -->
  <!-- main wrapper -->
  <!-- ============================================================== -->
  <div class="dashboard-main-wrapper">
    <!-- ============================================================== -->
    <!-- navbar -->
    <!-- ============================================================== -->
    <div class="dashboard-header">
      <nav class="navbar navbar-expand-lg bg-white fixed-top">
        <a class="navbar-brand" href="{{asset('/')}}"><img src="{{asset('/assets/img/logo/logo-2.png')}}" width="100px"
            alt="exporso logo"></a>

      </nav>
    </div>
    <!-- ============================================================== -->
    <!-- end navbar -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- left sidebar -->
    <!-- ============================================================== -->
    <div class="nav-left-sidebar sidebar-dark">
      <div class="menu-list">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="d-xl-none d-lg-none" href="#">Dashboard</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav flex-column">
              <li class="nav-divider">
                Menu
              </li>
              <li class="nav-item ">
                <a class="nav-link {{ (request()->segment(2) == 'orders') ? 'active' : '' }}"
                  href="{{asset('/admin/orders')}}"><i class="fas fa-fw fa-file"></i>Manage Orders
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link {{ (request()->segment(2) == 'blogs') ? 'active' : '' }}"
                  href="{{asset('/admin/blogs')}}"><i class="fab fa-blogger"></i>Manage Blogs
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link {{ (request()->segment(2) == 'admin') ? 'active' : '' }}"
                  href="{{asset('/admin/admin')}}"><i class="fa fa-fw fa-user-circle"></i>Manage Admin
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link {{ (request()->segment(2) == 'Customer') ? 'active' : '' }}"
                  href="{{asset('/admin/Customer')}}"><i class="fa fa-fw fa-user"></i>Manage Customer
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link {{ (request()->segment(2) == 'category') ? 'active' : '' }}"
                  href="{{asset('/admin/category')}}"><i class="fas fa-fw fa-chart-pie"></i>Manage
                  Category </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link {{ (request()->segment(2) == 'products') ? 'active' : '' }}"
                  href="{{asset('/admin/products')}}"><i class="fas fa-box"></i>Manage Product
                </a>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    </div>
    {{-- ======== --}}
    <div class="dashboard-wrapper">
      <div class="dashboard-ecommerce">
        <div class="container-fluid dashboard-content ">
          @yield('content')
        </div>
      </div>
      <div class="footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              Copyright © 2018 Concept. All rights reserved. Dashboard by <a
                href="https://colorlib.com/wp/">Colorlib</a>.
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="text-md-right footer-links d-none d-sm-block">
                <a href="javascript: void(0);">About</a>
                <a href="javascript: void(0);">Support</a>
                <a href="javascript: void(0);">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ============================================================== -->

    <!-- ============================================================== -->
    <!-- end footer -->
    <!-- ============================================================== -->

    <!-- ============================================================== -->
    <!-- end wrapper  -->
    <!-- ============================================================== -->
  </div>
  <!-- ============================================================== -->
  <!-- end main wrapper  -->
  <!-- ============================================================== -->
  <!-- Optional JavaScript -->
  <!-- jquery 3.3.1 -->
  <script src="{{asset('adminAssets/vendor/jquery/jquery-3.3.1.min.js')}}"></script>
  <!-- bootstap bundle js -->
  <script src="{{asset('adminAssets/vendor/bootstrap/js/bootstrap.bundle.js')}}"></script>
  <!-- slimscroll js -->
  <script src="{{asset('adminAssets/vendor/slimscroll/jquery.slimscroll.js')}}"></script>
  <!-- main js -->
  <script src="{{asset('adminAssets/libs/js/main-js.js')}}"></script>
  <!-- chart chartist js -->
  <script src="{{asset('adminAssets/vendor/charts/chartist-bundle/chartist.min.js')}}"></script>
  <!-- sparkline js -->
  <script src="{{asset('adminAssets/vendor/charts/sparkline/jquery.sparkline.js')}}"></script>
  <!-- morris js -->
  <script src="{{asset('adminAssets/vendor/charts/morris-bundle/raphael.min.js')}}"></script>
  <script src="{{asset('adminAssets/vendor/charts/morris-bundle/morris.js')}}"></script>
  <!-- chart c3 js -->
  <script src="{{asset('adminAssets/vendor/charts/c3charts/c3.min.js')}}"></script>
  <script src="{{asset('adminAssets/vendor/charts/c3charts/d3-5.4.0.min.js')}}"></script>
  <script src="{{asset('adminAssets/vendor/charts/c3charts/C3chartjs.js')}}"></script>
  <script src="{{asset('adminAssets/libs/js/dashboard-ecommerce.js')}}"></script>
</body>

</html>
<!-- end document-->