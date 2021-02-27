<?php

namespace App\Http\Controllers;

use App\Admin;
use App\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class loginRegisterController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);
        $Admin = Admin::where('email', "=", request()->email, "And", 'password', "=", request()->password)
            ->get();

        if (count($Admin)) {
            $request->session()->put("loginUser", ["id" => $Admin[0]->id, "role" => "admin"]);
            return redirect('/');
        }
        $Customer = Customer::where('email', "=", request()->email, "And", 'password', "=", request()->password)
            ->get();
        if (count($Customer)) {
            $request->session()->put("loginUser", ["id" => $Customer[0]->id, "role" => "customer"]);
            return redirect('/');
        } else {
            return redirect('/login')->with('Error', 'Wrong email or password');
        }
    }
    public function register(Request $request)
    {
        $request->validate(
            [
                'name' => 'required',
                'email' => 'required|email',
                'password' => 'required|min:6',
            ]
        );

        $customer = Customer::where('email', '=', $request->email)
            ->get();
        if (count($customer)) {
            return back()->with('faild', 'email already exists');
        } else {
            $customre = new Customer();
            $customre->name = $request->input('name');
            $customre->email = $request->input('email');
            $customre->password = $request->input('password');
            $customre->save();

            $id = DB::getPdo()->lastInsertId();
            $request->session()->put("loginUser", ["id" => $id, "role" => "customer"]);
            return redirect('/');
        }
    }
    public function logout()
    {
        session()->forget('loginUser');
        session()->forget('cart');
        return redirect('/');
    }
}