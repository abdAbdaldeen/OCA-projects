@extends('layouts.masterPage')
@section('contant')
<div class="blog_area pt-105 pb-100">
  <div class="container">
    <h2>Add Blog</h2>
    <form action="" method="post" enctype="multipart/form-data">
      {{ csrf_field() }}
      <div class="form-group">
        <label for="">Heading <span class="required">*</span></label>
        <input type="text" name="heading" class="form-control">
        @if ($errors->has('heading'))
        <div class="alert alert-danger">{{ $errors->first('heading') }}</div>
        @endif
      </div>
      <div class="form-group">
        <label for="">Main Image <span class="required">*</span></label>
        <input name="image" type="file" class="form-control">
        @if ($errors->has('image'))
        <div class="alert alert-danger">{{ $errors->first('image') }}</div>
        @endif
      </div>
      <div class="form-group">
        <label for="">Body <span class="required">*</span></label>
        <textarea class="ckeditor form-control" name="body"></textarea>
        @if ($errors->has('body'))
        <div class="alert alert-danger">{{ $errors->first('body') }}</div>
        @endif
      </div>
      <div class="form-group login_submit">
        <button type="submit">Add Blog</button>
        {{-- <input type="submit" value="Add Blog"> --}}
      </div>

    </form>
  </div>
  <script src="//cdn.ckeditor.com/4.14.1/standard/ckeditor.js"></script>
  <script type="text/javascript">
    $(document).ready(function () {
        $('.ckeditor').ckeditor();
    });
    
  </script>
</div>
@endsection