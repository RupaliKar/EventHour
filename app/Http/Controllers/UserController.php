<?php
namespace App\Http\Controllers;
use App\User;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function registration(Request $request){
        $this->validate($request, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255|email|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
        
        $data = $request->all();
        $data['password'] = Hash::make($data['password']);
        return User::create($data);
    }

    public function login(Request $request){
        if((User::where('email', $request->email)->count())==0){
            return response()->json([
                'msg' => "Email doesn't exist!",
            ],422);
        }
        // if((User::where([['email', $request->email],['isActive' , 0 ])->count())==0){
        //     return response()->json([
        //         'msg' => "Please Wait for the Admin Activation!",
        //     ],422);
        // }
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password ])) {
           return Auth::user();
         }
         else{
            return response()->json([
                'msg' => "Password doen't match!",
            ],422);
         }
    }


}
