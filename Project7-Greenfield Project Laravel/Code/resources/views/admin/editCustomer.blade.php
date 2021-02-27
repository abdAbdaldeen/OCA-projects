@extends ('layouts.app')
@section('content')
<div class="section__content section__content--p30">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">Manage Customer</div>
          <div class="card-body">
            <div class="card-title">
              <h3 class="text-center title-2">Edit Customer</h3>
            </div>
            <hr>
            @if ($message = Session::get('success'))
            <div class="alert alert-success">
              <p>{{ $message }}</p>
            </div>
            @endif
            <form action="{{ route('admin.Customer.update', $Customer->id) }}" method="post" enctype="multipart/form-data">
              @method('PATCH')
              {{ csrf_field() }}
              <div class="form-group">
                <label for="name" class="control-label mb-1">Customer Name</label>
                <input name="name" type="text" class="form-control" value="{{ $Customer-> name }}">
                @if ($errors->has('name'))
                <div class="alert alert-danger">{{ $errors->first('name') }}</div>
                @endif
              </div>
              <div class="form-group">
                <label for="email" class="control-label mb-1">Customer Email</label>
                <input name="email" type="email" class="form-control" value="{{ $Customer-> email }}">
                @if ($errors->has('email'))
                <div class="alert alert-danger">{{ $errors->first('email') }}</div>
                @endif
              </div>
              <div class="form-group">
                <label for="password" class="control-label mb-1">Customer Password</label>
                <input name="password" type="password" class="form-control">
                @if ($errors->has('password'))
                <div class="alert alert-danger">{{ $errors->first('password') }}</div>
                @endif
              </div>
              <div class="form-group">
                <label for="image" class="control-label mb-1">Customer Image</label>
                <input name="image" type="file" class="form-control">
              </div>
              <div>
                <button id="payment-button" type="submit" class="btn btn-lg btn-info btn-block" name="submit">Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection