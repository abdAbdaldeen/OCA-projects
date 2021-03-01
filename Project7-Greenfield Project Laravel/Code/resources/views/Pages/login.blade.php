@extends('layouts.masterPage')

@section('contant')

<div class="breadcrumb_section">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="breadcrumb_inner">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><i class="zmdi zmdi-chevron-right"></i></li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<!--Breadcrumb section end-->
<!-- accont area start -->
<div class="account_area ptb-70">
    <div class="container">
        <div class="row">
            <!--login area start-->
            <div class="col-lg-6 col-md-12">
                <div class="account_form">
                    <div class="login_title">
                        <h2>Login</h2>
                    </div>
                    <div class="login_form login">
                        @if ($message = Session::get('Error'))
                        <div class="alert alert-worning">
                            <p>{{ $message }}</p>
                        </div>
                        @endif
                        <form action="login" method="POST">
                            {{ csrf_field() }}
                            <div class="login_input">
                                <label>Email <span>*</span></label>
                                <input type="email" name="email">
                                @if ($errors->has('email'))
                                <div class="alert alert-danger">{{ $errors->first('email') }}</div>
                                @endif
                            </div>
                            <div class="login_input">
                                <label>Passwords <span>*</span></label>
                                <input type="password" name="password">
                                @if ($errors->has('password'))
                                <div class="alert alert-danger">{{ $errors->first('password') }}</div>
                                @endif
                            </div>
                            <div class="login_submit">
                                <button type="submit">Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <!--login area start-->

            <!--register area start-->
            <div class="col-lg-6 col-md-12">
                <div class="login_title">
                    <h2>Register</h2>
                </div>
                <div class="login_form form_register ">
                    <form action="register" method="POST">
                        {{ csrf_field() }}
                        <div class="login_input">
                            <label>Name <span>*</span></label>
                            <input type="text" name="name">
                            @if ($errors->has('name'))
                            <div class="alert alert-danger">{{ $errors->first('name') }}</div>
                            @endif
                        </div>
                        <div class="login_input">
                            <label>Email address <span>*</span></label>
                            <input type="email" name="email">
                            @if ($errors->has('email'))
                            <span class="text-danger">{{ $errors->first('email') }}</span>
                            @elseif($message = Session::get('faild'))
                            <p class="text-danger">{{ $message }}</p>
                            @endif
                        </div>
                        <div class="login_input">
                            <label>password <span>*</span></label>
                            <input type="password" name="password">
                            @if ($errors->has('password'))
                            <div class="alert alert-danger">{{ $errors->first('password') }}</div>
                            @endif
                        </div>

                        <div class="login_submit">
                            <button type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
            <!--register area end-->
        </div>
    </div>
</div>
<!-- accont area end -->
@endsection