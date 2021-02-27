<?php

namespace App\Http\Controllers;

use App\igration;
use App\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index()
    {
    }


    public function store(Request $request)
    {
        //Get customer and product id
        $customer_id = session('loginUser')['id'];
        $product_id  = $request->id;
        $request->validate([
            'comment' => 'required',
        ]);
        $review = new Review();
        $review->customer_id = $customer_id;
        $review->product_id  = $product_id;
        $review->comment = $request->get('comment');
        $review->rate = $request->get('rate');
        $review->save();

        return redirect('/product/' . $product_id);
    }



    public function edit(igration $igration)
    {
        //
    }

    public function update(Request $request, igration $igration)
    {
        //
    }

    public function destroy(igration $igration)
    {
        //
    }
}
