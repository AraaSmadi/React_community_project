<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Services;

class ServicesController extends Controller
{
    //



    function index()
    {
        return Services::all();
    }

    function single($id)
    {
        return Services::firstWhere('id', $id);
    }



    // Create (POST) function
    function store(Request $request)
    {
        //validation
        // request()->validate([
        //     'title' => 'required',
        //     'content' => 'required'
        // ]);

        //create command

        if ($request->file('file')) {
            $filepath = $request->file('file')->store('products');
        } else {
            $filepath = null;
        }

        if ($request->file('file2')) {
            $filepath2 = $request->file('file2')->store('products');
        } else {
            $filepath2 = null;
        }

        if ($request->file('file3')) {
            $filepath3 = $request->file('file3')->store('products');
        } else {
            $filepath3 = null;
        }

        if ($request->file('file4')) {
            $filepath4 = $request->file('file4')->store('products');
        } else {
            $filepath4 = null;
        }








        return Services::create([
            'title' => request('title'),
            'price' => request('price'),
            'description' => request('description'),
            'picture' => request('picture'),
            'categories_id' => request('categories_id'),
            'picture' => $filepath,
            'picture_two' => $filepath2,
            'picture_three' => $filepath3,
            'picture_four' => $filepath4

        ]);
    }



    // Update (PUT) function
    function update(Services $service)
    {


        return $service->update([
            'title' => request('title'),
            'price' => request('price'),
            'description' => request('description'),
            'picture' => request('picture')

        ]);


        // return $product->update([
        //     'title' => request('name'),
        //     'content' => request('content')

        // ]);


    }



    // Delete (DELETE) function
    function destroy(Services $service)
    {
        return  $service->delete();
    }














    public function view($id){
        // return Services::all()->where('categories_id',$id);
        $tables = Services::where('categories_id', $id)->get();
        if($tables->count() > 0){

            return response()->json($tables);
        }
         return response()->json(['message' => 'No tables found'], 404);
       }

       public function view2($id){
        return Services::all()->where('id',$id);
       }
}
