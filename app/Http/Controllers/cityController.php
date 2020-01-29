<?php

namespace App\Http\Controllers;
use App\City;
use Illuminate\Http\Request;

class cityController extends Controller
{
    public function allCity(){
        return City::all();
    }

    public function storeCity(Request $request){
        $data = $request->all();
        return City::create($data);
    }

    public function upload(Request $request)
    {
       \Log::info($request->all());
        
        request()->file('image')->store('uploads');
        $pic= $request->image->hashName();
        $pic= "/public/uploads/$pic";
        /*update the profile pic*/
        //return Gallery::create($data);
        return response()->json([
            'imageUrl'=> $pic
        ],200);
    }
}
