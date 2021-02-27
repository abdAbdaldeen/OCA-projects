@extends('layouts.app')

@section('content')
    <div class="section__content section__content--p30">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">Manage Customers</div>
                        <div class="card-body">
                          <div class="card-title">
                              <h3 class="text-center title-2">Create Customer</h3>
                            </div>
                            <hr>
                            @if ($message = Session::get('success'))
                                <div class="alert alert-success">
                                    <p>{{ $message }}</p>
                                </div>
                            @endif
                            <form action="Customer" method="post" enctype="multipart/form-data">
                                {{ csrf_field() }}
                                <div class="form-group">
                                    <label for="name" class="control-label mb-1">Customer Name</label>
                                    <input  name="name" type="text" class="form-control" value="{{ old('name') }}">
                                    @if ($errors->has('name'))
                                        <div class="alert alert-danger">{{ $errors->first('name') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="email" class="control-label mb-1">Customer Email</label>
                                    <input  name="email" type="email" class="form-control" value="{{ old('email') }}">
                                    @if ($errors->has('email'))
                                        <div class="alert alert-danger">{{ $errors->first('email') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="password" class="control-label mb-1">Customer Password</label>
                                    <input  name="password" type="password" class="form-control" value="{{ old('password') }}">
                                    @if ($errors->has('password'))
                                        <div class="alert alert-danger">{{ $errors->first('password') }}</div>
                                    @endif
                                </div>
                                <div class="form-group">
                                    <label for="image" class="control-label mb-1">Customer Image</label>
                                    <input  name="image" type="file" class="form-control">
                                </div>
                                <div>
                                    <button id="payment-button" type="submit" class="btn btn-lg btn-info btn-block" name="submit">Add
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row m-t-30">
                <div class="col-md-12">
                    <!-- DATA TABLE-->
                    <div class="table-responsive m-b-40">
                        <table class="table table-borderless table-data3">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($Customers as $Customer)
                                <tr>
                                    <td>{{$Customer->id}}</td>
                                    <td>{{$Customer->email}}</td>
                                    <td> <div class="image img-cir img-40">
                                            <img src="{{asset("images/{$Customer->image}")}}">
                                        </div>
                                    </td>
                                    <td>{{$Customer->name}}</td>
                                    <td>
                                        <a href="{{ route('admin.Customer.edit', $Customer->id)}}" class="btn btn-warning">Edit</a>
                                    </td>
                                    <td>
                                        <form action="{{ route('admin.Customer.destroy', $Customer->id)}}" method="post">
                                            @csrf
                                            @method('DELETE')
                                            <button class="btn btn-danger" type="submit">Delete</button>
                                        </form>
                                    </td>

                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                    <!-- END DATA TABLE-->
                </div>
            </div>
        </div>
    </div>
@endsection
