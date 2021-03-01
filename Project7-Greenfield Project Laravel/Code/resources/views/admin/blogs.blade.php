@extends('layouts.app')

@section('content')
<div class="section__content section__content--p30">
  <div class="container-fluid">
    <div class="row m-t-30">
      <div class="col-md-12">
        <h1>Manage Orders</h1>
        <!-- DATA TABLE-->
        <div class="table-responsive m-b-40" style="background-color:rgba(255, 255, 255, 0.658);">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer ID</th>
                <th>Heading</th>
                <th>Status</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              @foreach ($blogs as $blog)
              <tr>
                <td>{{$blog->id}}</td>
                <td>{{$blog->customer_id}}</td>
                <td>{{$blog->heading}}</td>
                <td>
                  <select id="{{$blog->id}}" name="state" class="form-control" onchange="stateChange({{$blog->id}})">
                    <option value="Pending">Pending
                    </option>
                    <option value="Approved" {{$blog->state == "Approved" ? "selected" : ""}}>Approved</option>
                  </select>
                </td>
                <td><a href="{{ asset('admin/blogs/view/'. $blog->id)}}" class="btn btn-warning">View</a></td>
              </tr>
              @endforeach

            </tbody>
          </table>
        </div>
        <!-- END DATA TABLE-->
      </div>
    </div>
    <div class="row pagination_box mt-70">
      <div class="col-12">
        {{$blogs->links()}}
      </div>
    </div>
  </div>
</div>
<script>
  function stateChange (id){
    var e = document.getElementById(id);
    var state = e.value;
    document.location.href = `/admin/blogs/${id}/${state}`;
  }
  //   $('#status').on('change', function() {
//   alert( this.value );
// });
</script>
@endsection