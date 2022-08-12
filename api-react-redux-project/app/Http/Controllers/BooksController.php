<?php

namespace App\Http\Controllers;
use App\Models\Books;
use Illuminate\Http\Request;

class BooksController extends Controller
{

    public function store(Request $request){
        $Books= new Books;
        $Books->email= $request->email;
        $Books->phone= $request->phone;
        $Books->hour= $request->hour;
        $Books->date= $request->date;
        $Books->costumer_id = $request->costumer_id;
        $Books->service_id= $request->service_id;
        $Books->save();
        
     }


    public function create($id)
    {
        
        $book= Books::select('books.*','books.id as b','costumers.*')
        ->join('costumers','costumers.id','=','books.costumer_id')
        ->join('services','services.id','=','books.service_id')
        ->where('services.id',$id)
        ->get();
        return $book;


    }





































































































































     function index1()
     {
 
         return Books::orderBy('id', 'DESC')->get();
     }
 
     function single1($id)
     {
         return Books::firstWhere('id', $id);
     }
 
 
 
     // Create (POST) function
     function store1(Request $request)
     {
         //validation 
         request()->validate([
            //  'date' => 'required',
            //  'hour' => 'required',
            //  'date' => 'required',
             'book_state' => 'required',
             'service_id' => 'required',
             'costumer_id' => 'required'
         ]);
 
         //create command
         return Books::create([
             'date' => request('date'),
             'phone' => request('phone'),
             'hour' => request('hour'),
             'email' => request('email'),
             'book_state' => request('book_state'),
             'service_id' => request('service_id'),
             'costumer_id' => request('costumer_id')
 
 
         ]);
     }
 
 
     function changeState(Books $book){
         return $book->update([
             'book_state' => request('book_state')
         ]);
 
 
     }
     // Update (PUT) function
     function update1(Books $book)
     {
 
 
         //validation 
         request()->validate([
             'date' => 'required',
             'hour' => 'required',
             'date' => 'required',
             'book_state' => 'required',
             'service_id' => 'required',
             'costumer_id' => 'required'
         ]);
 
     //Update query 
         return $book->update([
 
             'date' => request('date'),
             'phone' => request('phone'),
             'hour' => request('hour'),
             'semail' => request('email'),
             'book_state' => request('book_state'),
             'service_id' => request('service_id'),
             'costumer_id' => request('costumer_id')
         ]);
 
     }
 
 
 
     // Delete (DELETE) function
     function destroy1(Books $book)
     {
         return  $book->delete();
     }
 
}
