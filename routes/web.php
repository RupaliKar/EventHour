<?php

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/admin_master', function () {
    return view('admin');
});

Route::get('/app/all_city', "cityController@allCity");
Route::post('/app/add_city', "cityController@storeCity");
Route::post('/app/upload', "cityController@upload");
// Route::post('/app/edit_city', "CityController@updateCity");
// Route::post('/app/delete_city', "CityController@deleteCity");
// Route::post( 'app/getUserImage', 'CityController@getUserImage');
















// Registration & Login Route
Route::post('/app/registration', "UserController@registration");
Route::post('/app/login', "UserController@login");


//logout
Route::get('/logout', function () {
    Auth::logout();
    Session::flush();
    return redirect("/");
});

Route::any('{slug}', 'HomeController@home')->where('slug', '([A-z\d-\/_.]+)?');