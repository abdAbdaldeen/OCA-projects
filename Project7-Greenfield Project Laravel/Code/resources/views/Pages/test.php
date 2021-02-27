@foreach ($DiscountProducts as $Product)
<div class="col-lg-4 col-md-6 col-12">
    <div class="single__product">
        <span class="pro_badge">Sale</span>
        <div class="produc_thumb">
            <a href="product/{{$Product['id']}}"><img src="{{asset("images/".$Product->image)}}" alt=""></a>
        </div>
        <div class="product_hover">
            <div class="product__desc">
                <h3><a href="product">{{$Product->name}}</a></h3>
                <div class="price_amount">
                    <span class="current_price"> {{($Product->price)-(($Product->discount/100)*($Product->price))}}JD</span>
                    <span class="discount_price">-{{$Product->discount}}%</span>
                    <span class="old_price">{{$Product->price}}JD</span>
                </div>
            </div>
        </div>
    </div>
</div>
@endforeach
@foreach ($Products as $Product)
<div class="col-lg-4 col-md-6 col-12">
    <div class="single__product">
        <div class="produc_thumb">
            <a href="product/{{$Product['id']}}"><img src="{{asset("images/".$Product->image)}}" alt=""></a>
        </div>
        <div class="product_hover">
            <div class="product__desc">
                <h3><a href="product">{{$Product->name}}</a></h3>
                <div class="price_amount">
                    <span class="current_price">{{$Product->price}}JD</span>
                </div>
            </div>
        </div>
    </div>
</div>
@endforeach