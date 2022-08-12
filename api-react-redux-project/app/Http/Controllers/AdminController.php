<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;


class AdminController extends Controller
{
    public function loginAdm(Request $request)
    {

         $validator = Validator::make(
             $request->all(),
             [
                 'email' => 'email|required',
                'password' => 'required|min:8',
            ]
         );


        $user = Admin::where('email', request('email'))->first();


         if (!$user || ($user->password != request('password'))) {
             return response()->json([
                 'errors' => ['Email or Password is incorrect']
            ]);
         }
        return response($user, 201);

        
    //     if (!$user || !Hash::make($user->password)) {
    //         return response()->json([
    //             'errors' => ['Email or Password is incorrect']
    //        ]);
    //     }
    //    return response($user, 201);


    }


























































































































    
    
}
