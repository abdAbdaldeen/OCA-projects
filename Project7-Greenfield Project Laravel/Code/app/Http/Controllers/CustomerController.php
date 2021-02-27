<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Customer;

class CustomerController extends Controller
{
    public function index (){
        $Customers = Customer::all();
        return view('admin.Customer',compact('Customers'));
    }

    public function store(Request $request)
    {
        request()->validate([
            'name' => 'required|min:4',
            'email' => 'required|email',
            'password' => 'required|min:6',
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if (!empty(request()->image)){
            $imageName = time().'.'.request()->image->getClientOriginalExtension();
            request()->image->move(public_path('images'), $imageName);
        }
        else {
            $imageName= 'default.png';
        }


        $var = new Customer;
        $var->name = $request->input('name');
        $var->email = $request->input('email');
        $var->password = $request->input('password');
        $var->image = $imageName;

        $var->save();
        return back()->with('success', 'Customer created successfully.');
    }

    public function edit($id)
    {
        $Customer = Customer::find($id);
        return view('admin.editCustomer', compact('Customer'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|min:4',
            'email' => 'required|email',
            'password' => 'required|min:6',
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        if (!empty(request()->image)){
            $imageName = time().'.'.request()->image->getClientOriginalExtension();
            request()->image->move(public_path('images'), $imageName);
        }
        else {
            $Customer = Customer::find($id);
            $imageName= $Customer-> image;
        }

        $Customer = Customer::find($id);
        $Customer->name =  $request->get('name');
        $Customer->email = $request->get('email');
        $Customer->password = $request->get('password');
        $Customer->image = $imageName;
        $Customer->save();

        return redirect('/admin/Customer')->with('success', 'Contact updated!');
    }

    public function destroy($id)
    {
        $Customer = Customer::find($id);
        $Customer->delete();

        return back()->with('success', 'Customer deleted!');
    }

}