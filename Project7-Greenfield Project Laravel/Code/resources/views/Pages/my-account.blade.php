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

<!-- Start Maincontent  -->
<section class="main_content_area my_account ptb-100">
   <div class="container">
      <div class="account_dashboard">
         <div class="row">
            <div class="col-sm-12 col-md-3 col-lg-3">
               <!-- Nav tabs -->
               <div class="dashboard_tab_button">
                  <ul role="tablist" class="nav flex-column dashboard-list">
                     <li><a href="#Profile" data-toggle="tab" class="nav-link active">Profile</a></li>
                     <li> <a href="#orders" data-toggle="tab" class="nav-link">Orders</a></li>
                     <li><a href="#account-details" data-toggle="tab" class="nav-link">Edit Profile</a></li>
                     <li><a href="logout" class="nav-link">logout</a></li>
                  </ul>
               </div>
            </div>
            <div class="col-sm-12 col-md-9 col-lg-9">
               <!-- Tab panes -->
               <div class="tab-content Profile_content">
                  <div class="tab-pane fade show active" id="Profile">
                     <h3 class="ml-5">Profile </h3>
                     <br>
                     <!--administrator start-->
                     <div class="administrator">
                        <div class="administrator_thumb">
                           <img src="{{asset("images/{$customer[0]->image}")}}" alt="">
                        </div>
                        <div class="administrator_contnet">
                           <p>Name :<span>{{ $customer[0]->name }}</span></p>
                           <p>Email:<span>{{ $customer[0]->email }}</span></p>
                           <p>Phone:<span>{{ $customer[0]->phone }}</span></p>
                        </div>
                     </div>
                     <!--administrator end-->
                  </div>
                  <div class="tab-pane fade" id="orders">
                     <h3>Orders</h3>
                     <div class="lion_table_area table-responsive">

                        @foreach ($ordersTable as $order)
                        <table class="table">
                           <thead>

                              <tr>
                                 <th>Product Name</th>
                                 <th>Image</th>
                                 <th>Quantity </th>
                              </tr>
                           </thead>
                           <tbody>

                              @foreach ($order["order_products"] as $key=> $order_product)

                              <tr>

                                 <td>{{ $order_product->name }}</td>
                                 <td> <img height='100' src="{{asset('images/'.$order_product->image)}}" alt=""></td>


                                 <td>
                                    @if ($order_product->quantity!=1)
                                    {{$order_product->quantity }} items
                                    @else
                                    {{$order_product->quantity }} item
                                    @endif
                                 </td>

                              </tr>
                              @endforeach

                              <tr>
                                 <td colspan="3" class="subtableCon">
                                    <table class="subtable">
                                       <tr>
                                          <th>Summary</th>
                                          <td>Order id :{{ $order["order"]->id }}</td>
                                          <td>Date:{{ Str::substr($order["order"]->created_at,0, 16)  }}</td>
                                          <td>Status: {{ $order["order"]->status  }}</td>
                                          <td>Total Price: {{ $order["order"]->total_price  }} JOD</td>

                                       </tr>
                                    </table>

                                 </td>
                              </tr>

                           </tbody>
                        </table>
                        @endforeach
                        <div class="card mb-3" style="max-width: 540px;">

                        </div>
                     </div>
                  </div>

                  <div class="tab-pane fade" id="account-details">
                     <h3>Edit Profile </h3>
                     <div class="login">
                        <div class="login_form_container">
                           <div class="account_login_form">
                              <form method="POST" enctype="multipart/form-data">
                                 @csrf
                                 @method('PATCH')
                                 <label>Name</label>
                                 <input type="text" name="name" value="{{ $customer[0]->name }}">
                                 @if ($errors->has('name'))
                                 <div class="alert alert-danger">{{ $errors->first('name') }}</div>
                                 @endif
                                 <label>Email</label>
                                 <input type="email" name="email" value="{{ $customer[0]->email }}">
                                 @if ($errors->has('email'))
                                 <div class="alert alert-danger">{{ $errors->first('email') }}</div>
                                 @endif
                                 <label>Image</label>
                                 <input type="file" name="image">
                                 <label>Phone</label>
                                 <input type="text" name="phone" value="{{ $customer[0]->phone}}">
                                 @if ($errors->has('phone'))
                                 <div class="alert alert-danger">{{ $errors->first('phone') }}</div>
                                 @endif
                                 <button class="btn btn-danger rounded" name="submit" type="submit">Save</button>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<!-- End Maincontent  -->
@endsection