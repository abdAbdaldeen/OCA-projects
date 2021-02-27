<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Product;
use Illuminate\Http\Request;

class cartController extends Controller
{
    public function index()
    {
        $cart = session()->get("cart");
        // dd($cart);
        if ($cart && count($cart)) {
            $cartDetails = [];
            $total = 0;
            foreach ($cart as $product) {
                $productDetails = Product::where("id", '=', $product['product'])->get();
                $cartPro = [];
                $cartPro["product"] = $productDetails[0];
                if ($cartPro["product"]->discount != 0) {
                    $cartPro["product"]->price = ($cartPro["product"]->price) - (($cartPro["product"]->discount / 100) * ($cartPro["product"]->price));
                }
                $cartPro["qty"] = $product["qty"];
                $cartDetails[] = $cartPro;
                $total += $cartPro["product"]->price * $product["qty"];
            }
            return view('Pages.cart', compact('cartDetails', 'total'));
        } else {
            return "cart empty";
        }
    }
    public function addToCart(Request $req)
    {
        if (!$req->session()->has("cart")) {
            $req->session()->put("cart", [["product" => $req->id, "qty" => $req->qty]]);
        } else {
            $cart = $req->session()->get("cart");
            foreach ($cart as $key => $item) {
                if ($item["product"] == $req->id) {
                    $cart[$key]["qty"] += $req->qty;
                    $req->session()->put("cart", $cart);
                    return back()->with('success', 'product was update to cart.');
                }
            }
            $cart[] = ["product" => $req->id, "qty" => $req->qty];
            $req->session()->put("cart", $cart);
        }

        return back()->with('success', 'product was added to cart.');
    }
    public function delete($id)
    {
        $cart = session()->get("cart");
        $cartNew = [];
        foreach ($cart as $item) {
            if ($item["product"] != $id) {
                $cartNew[] = $item;
            }
        }
        session()->put("cart", $cartNew);
        return back();
    }
    public function update(Request $request)
    {
        $cart = session()->get("cart");
        foreach ($cart as $key => $item) {
            $id = $cart[$key]['product'];
            $cart[$key]['qty'] = $request->$id;
            $request->session()->put("cart", $cart);

        }
        return back()->with('success', 'Cart was update successfully.');

    }
    // =============================
    public function Checkout()
    {
        $cart = session()->get("cart");
        $cartDetails = [];
        $total = 0;
        foreach ($cart as $product) {
            $productDetails = Product::select('name', 'price', 'discount')
                ->where("id", '=', $product['product'])->get();
            $cartPro = [];
            $cartPro["product"] = $productDetails[0];
            $cartPro["product"]->price = ($cartPro["product"]->price) - (($cartPro["product"]->discount / 100) * ($cartPro["product"]->price));

            $cartPro["qty"] = $product["qty"];
            $cartDetails[] = $cartPro;
            $total += $cartPro["product"]->price * $product["qty"];
        }
        // ========
        $id = session('loginUser')['id'];
        $customers = Customer::where('id', '=', $id)->get();
        $customer = $customers[0];

        return view('Pages.checkout', compact('cartDetails', 'total', 'customer'));

    }

}