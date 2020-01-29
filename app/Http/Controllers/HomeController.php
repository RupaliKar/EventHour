<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    // public function home(Request $request){
    //     return view('welcome');
    // }
    
    public function home(Request $request){
        if($request->segment(1)=='admin'){  //segment(1) is for if after slag had anything then it's get this url ,ex admin '/admin/'
            return view('admin');
        }
            return view('welcome');
        }
    
}
