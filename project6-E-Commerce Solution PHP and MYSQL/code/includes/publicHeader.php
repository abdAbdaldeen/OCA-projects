<?php 
session_start();

?>

<!DOCTYPE html>
<html class="no-js" lang="zxx">

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="meta description" />

  <title>Ruby - Luxury</title>

  <!--=== Favicon ===-->
  <link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon" />

  <!--== Google Fonts ==-->
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Droid+Serif:400,400i,700,700i" />
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Montserrat:400,700" />
  <link rel="stylesheet" type="text/css"
    href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i" />

  <!--=== Bootstrap CSS ===-->
  <link href="assets/css/vendor/bootstrap.min.css" rel="stylesheet" />
  <!--=== Font-Awesome CSS ===-->
  <link href="assets/css/vendor/font-awesome.css" rel="stylesheet" />
  <!--=== Plugins CSS ===-->
  <link href="assets/css/plugins.css" rel="stylesheet" />
  <!--=== Main Style CSS ===-->
  <link href="assets/css/style.css" rel="stylesheet" />
  <link href="assets/css/mystyle.css" rel="stylesheet" />

  <!-- Modernizer JS -->
  <script src="assets/js/vendor/modernizr-2.8.3.min.js"></script>
</head>

<body>
  <!--== Header Area Start ==-->
  <header id="header-area">
    <div class="ruby-container">
      <div class="row">
        <!-- Logo Area Start -->
        <div class="col-3 col-lg-1 col-xl-2 m-auto">
          <a href="index.php" class="logo-area">
            <img src="assets/img/logo.png" alt="Logo" class="img-fluid" />
          </a>
        </div>
        <!-- Logo Area End -->

        <!-- Navigation Area Start -->
        <div class="col-3 col-lg-9 col-xl-8 m-auto">
          <div class="main-menu-wrap">
            <nav id="mainmenu">
              <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="shop.php">Shop</a></li>
                <li><a href="cart.php">Shopping Cart</a></< /li>
                <li><a href="contact.php">Contact Us</a></li>
                <?php
								if (isset($_SESSION["loginUser"])) {
                  echo '<li><a href="my-account.php">My Account</a></li>';
                  if ($_SESSION["loginUser"]["role"]==="admin") {
                  echo '<li><a href="admin">Dashboard</a></li>';
                  }
								}else{
									echo '<li><a href="login.php">Login</a></li>
									<li><a href="register.php">register</a></li>';
								}
								?>

              </ul>
            </nav>
          </div>
        </div>
        <!-- Navigation Area End -->

        <!-- Header Right Meta Start -->
        <div class="col-6 col-lg-2 m-auto">
          <div class="header-right-meta text-right">
            <ul>
              <li class="shop-cart">
                <a href="cart.php"><i class="fa fa-shopping-bag"></i></a>
              </li>
            </ul>

          </div>
          <!-- Header Right Meta End -->
        </div>
      </div>
  </header>