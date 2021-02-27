<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Orders;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

class ProfileController extends Controller
{
    public function index()
    {
        $id = session('loginUser')['id'];

        $customer = Customer::where('id', '=', $id)->get();
//=======================
        $orders = DB::table('order_products')
            ->join('orders', 'order_products.order_id', 'orders.id')
            ->join('products', 'order_products.product_id', 'products.id')
            ->orderBy('orders.id')
            ->get();

        // dd($orders);
        $orders_array = [];

        $last_element = $orders->last();
        if ($last_element){
        $collection = collect($orders);

        for ($i = 1; $i <= $last_element->order_id; $i++) {
            $temp = [];
            $GLOBALS['i'] = $i;
            $temp = $collection->filter(function ($value, $key) {
                return $value->order_id ==
                    $GLOBALS['i'];
            });
            $orders_array[] = $temp;
        }

        }
//========================
        $orders = Orders::where("customer_id", $id)->get();

        $ordersTable = [];
        foreach ($orders as $order) {
            $order_products = DB::table("order_products")
                ->select("products.name","products.image","order_products.quantity")
                ->where("order_id", $order->id)
                ->join("products", "order_products.product_id","products.id")
                ->get();
            $ordersTable[] = [
                "order" => $order,
                "order_products" => $order_products,
            ];
        }

        return view('Pages.my-account', compact('customer', 'ordersTable'));
    }

    public function update(Request $request)
    {
        $id = session('loginUser')['id'];
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        if (!empty($request->image)) {
            $imageName = time() . '.' . $request->image->getClientOriginalExtension();
            $request->image->move(public_path('images'), $imageName);
        }
        $customre = Customer::find($id);
        $customre->name = $request->input('name');
        $customre->email = $request->input('email');
        $customre->phone = $request->input('phone');
        if (isset($imageName)) {
            $customre->image = $imageName;
        }
        $customre->save();
        return redirect('/my-account');
    }
}
