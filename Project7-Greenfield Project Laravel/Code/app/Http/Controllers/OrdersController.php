<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Orders;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrdersController extends Controller
{
    public function index()
    {
        $orders = Orders::all();
        $ordersTable = [];
        foreach ($orders as $order) {
            $order_products = DB::table("order_products")
                ->where("order_id", $order->id)
                ->get();
            $ordersTable[] = [
                "order" => $order,
                "order_products" => $order_products,
            ];
        }
        return view("admin.orders", compact("ordersTable"));
    }

    public function changeStatus($id, $status)
    {
        // dd($id, $status);
        $order = Orders::find($id);
        $order->status = $status;
        $order->save();
        return back();
    }

    // ==================
    public function store(Request $request)
    {
        $arr = $request->session()->get('loginUser');
        $customer_id = $arr['id'];

        // dd($request->phoneRequired);
        if ($request->phoneRequired) {
            request()->validate([
                'address' => 'required',
                'phone' => 'required',
            ]);
            $Customer = Customer::find($customer_id);
            $Customer->phone = $request->get('phone');
            $Customer->save();
        } else {
            request()->validate([
                'address' => 'required',
            ]);
        }

        // receive cart data
        $cart = $request->session()->get('cart');

        // calculate the total price & total quantity

        // transform  the array to one dimension array
        $cart_quantity = [];
        $single_product_price = [];
        $totalPrice = 0;
        $totalQty = 0;
        foreach ($cart as $item) {
            $productsPrice = DB::table('products')
                ->select('price', 'discount')
                ->where('id', '=', $item["product"])
                ->get();

            $totalPrice += ($productsPrice[0]->price - ($productsPrice[0]->price * $productsPrice[0]->discount / 100)) * $item["qty"];
            $totalQty += $item["qty"];
        }

        //add to order table order
        $order = new Orders;
        $order->customer_id = $customer_id;
        // calculate the total number of product

        $order->total_quantity = $totalQty;

        $order->total_price = $totalPrice;

        $order->address = $request->address;

        $order->save();

        $id = DB::getPdo()->lastInsertId();

        if (count($cart)) {
            foreach ($cart as $item) {
                DB::table('order_products')->insert(
                    [
                        'product_id' => $item['product'],
                        'order_id' => $id,
                        'quantity' => $item['qty'],
                    ]
                );
            }
        }

        $request->session()->forget('cart');

        return redirect("/");
    }
}