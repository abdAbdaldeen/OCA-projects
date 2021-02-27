@extends('layouts.masterPage')
@section('contant')
                <!--Breadcrumb section-->
                <div class="breadcrumb_section">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="breadcrumb_inner">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><i class="zmdi zmdi-chevron-right"></i></li>
                                        <li>404</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Breadcrumb section end-->
                
                <!--error section area start-->
                <div class="error_section ptb-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="error_form">
                                    <h1>404</h1>
                                    <h2>Opps! PAGE NOT  FOUND</h2>
                                  
                                    <a href="index">Back to home page</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Error Secton end-->
 @endsection