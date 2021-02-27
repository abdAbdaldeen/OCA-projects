<?php

namespace App\Http\Controllers;

use App\Category;
use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ShowPublicController extends Controller
{
    public function index()
    {
        $Categories = Category::all();
        $DiscountProducts = Product::where('discount', '!=', '0')->get();
        $HotProducts = Product::limit(3)->get();
        return view('Pages.index', compact('DiscountProducts', 'Categories', 'HotProducts'));
    }
    public function shop()
    {
        $Products = Product::paginate(9);
        $Categories = Category::select('id', 'name')->get();
        return view('Pages.shop', compact('Products', 'Categories'));
    }
    public function shopID($id)
    {
        $Products = Product::where('category_id', $id)->paginate(9);
        $Categories = Category::select('id', 'name')->get();
        return view('Pages.shop', compact('Products', 'Categories'));
    }
    public function Product($id)
    {
        $Products = DB::table('products')
            ->select('products.id', 'products.name', 'products.image', 'products.price', 'products.discount', 'products.description', 'categories.name AS category_name', 'categories.id AS category_id')
            ->where('products.id', $id)
            ->join("categories", "products.category_id", "categories.id")
            ->get();
        $Product = $Products[0];
        $reviews = DB::table('customers')
            ->select('reviews.comment', 'reviews.rate', 'customers.name', 'customers.image')
            ->where('reviews.product_id', '=', $id)
            ->join('reviews', 'customers.id', 'reviews.customer_id')
            ->get();
        $category_id = $Product->category_id;

        $relatedProducts = DB::table('products')
            ->where('category_id', "=", $category_id)
            ->where("id", "!=", $id)
            ->get();
        // dd($relatedProducts);
        $averageRate=0;
        if (count($reviews)){

        $total=0;

        foreach ($reviews as $review){
            $total+=$review->rate;
        }
        $averageRate = round($total/count($reviews));
        }
        return view('Pages.product', compact('Product', 'reviews', "relatedProducts","averageRate"));
    }

    public function search(Request $request)
    {
        $search = $request->input('search');
        $Products = Product::query()
            ->where('name', 'LIKE', "%{$search}%")
            ->get();
        $Categories = Category::select('id', 'name')->get();
        return view('Pages.shop', compact('Products', 'Categories'));
    }
}
