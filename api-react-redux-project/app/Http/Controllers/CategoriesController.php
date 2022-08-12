<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categories;

class CategoriesController extends Controller
{
    //












































































































































    public function index()
    {
        return Categories::all();
    }

    function single($id)
    {
        return Categories::firstWhere('id', $id);
    }



    // Create (POST) function
    public function store(Request $request)
    {
        // validation 
        // request()->validate([

        //     'name' => 'required|max:100'

        // ]);


        //create query
        return Categories::create([
            'name' => $request->input('name')
        ]);
    }



    // Update (PUT) function
    public function update(Categories $category)
    {

        request()->validate([
            'name' => 'required|max:100'
        ]);

        return $category->update([
            'name' => request('name')
        ]);
    }



    // Delete (DELETE) function
    public function destroy(Categories $category)
    {
        return  $category->delete();
    }
}
