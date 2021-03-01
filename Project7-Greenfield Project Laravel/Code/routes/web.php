<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

// Route::redirect('/', '/admin');

Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => ['isLogin', 'customAuth']], function () {
    Route::redirect('/', '/admin/orders');
    Route::resource('admin', 'AdminController');
    Route::resource('category', 'CategoryController');
    Route::resource('products', 'ProductsController');
    Route::resource('Customer', 'CustomerController');
    Route::get('orders', 'OrdersController@index');
    Route::get('orders/{id}/{status}', 'OrdersController@changeStatus');
    Route::get('blogs', 'BlogController@adminIndex');
    Route::get('blogs/view/{id}', 'BlogController@view');
    Route::get('blogs/{id}/{status}', 'BlogController@changeStatus');
});

// ======================
Route::post('/login', 'loginRegisterController@login');
Route::post('/register', 'loginRegisterController@register');
Route::get('/logout', 'loginRegisterController@logout');
// ======================
Route::get('/', 'ShowPublicController@index');
Route::get('index', 'ShowPublicController@index');

Route::get('shop', 'ShowPublicController@shop');

Route::get('shop/{id}', 'ShowPublicController@shopID');

Route::get('product/{id}', 'ShowPublicController@Product');
Route::post('product/{id}', 'ReviewController@store');

Route::get('/search/', 'ShowPublicController@search')->name('search');
// ==========================
Route::get('my-account', 'ProfileController@index');

Route::patch('my-account', 'ProfileController@update');
// ==============================
Route::post('/addToCart', 'cartController@addToCart');
Route::post('/update', 'cartController@update');
Route::get('cart', 'cartController@index');
Route::get('cart/delete/{id}', 'cartController@delete');
Route::get('checkout', 'cartController@Checkout')->middleware('isLogin');
Route::post('checkout', 'OrdersController@store')->middleware('isLogin');

// =========================

Route::get('about', function () {
    return view('Pages.about-us');
});
Route::get('contact', function () {
    return view('Pages.contact');
});
Route::get('login', function () {
    return view('Pages.login');
});

Route::get('404', function () {
    return view('Pages.404');
});

// =================
Route::get('blog-details', function () {
    return view('Pages.blog-details');
});
Route::get('blog', "BlogController@index");
Route::get('blog/add', function () {
    return view('Pages.addBlog');
});

Route::post('blog/add', "BlogController@add");
Route::post('blog/addComment', "BlogController@addComment");
Route::post('blog/search', "BlogController@search");

Route::get('blog/{id}', "BlogController@blogDetails");
// ===================