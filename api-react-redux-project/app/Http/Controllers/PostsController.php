<?php

namespace App\Http\Controllers;
use App\Models\Posts;
use App\Models\Comments_post;
use Illuminate\Http\Request;

class PostsController extends Controller
{


    public function store(Request $request){
       $Posts= new Posts;
       $Posts->post= $request->post;

       $Posts->costumer_id= $request->costumer_id;

       $Posts->save();
    }

    function create (){
        $post= Posts::select('posts.*','posts.id as num','costumers.*')
        ->join('costumers','costumers.id','=','posts.costumer_id')

       ->get();
        return $post;

    }


    function show ($id){
        $post= Posts::select('posts.*','costumers.*')
        ->join('costumers','costumers.id','=','posts.costumer_id')
        ->where('posts.id',$id)
       ->get();
        return $post;
        
    }


    public function view($id)
    {

        // return Posts::all()->where('costumer_id' ,$id);
        $tables =Posts::where('costumer_id', $id)->get();
        if($tables->count() > 0){

            return response()->json($tables);
        }
         return response()->json(['message' => 'No posts found'], 404);

    }
    public function update(Request $request,$id)
         {
             $post=Posts::find($id);
             $post->update([
             'likes'=>$request->input('likes'),

         ]);
         $post->save();
         return $post;
      }
      public function viewP($id){
        return Posts::find($id);
        
       }
       public function viewComments($post_id){
        return Comments_post::all()->where('post_id',$post_id);
       }




















































































































































       function index1()
       {
   
           return Posts::select('posts.*','costumers.name')
           ->join('costumers','costumers.id','=','posts.costumer_id')->get();
       }
   
       function single1($id)
       {
           return Posts::firstWhere('id', $id);
       }
   
   
   
       // Create (POST) function
       function store1(Request $request)
       {
           //validation 
           request()->validate([
              //  'date' => 'required',
              //  'hour' => 'required',
              //  'date' => 'required',
            //    'book_state' => 'required',
            //    'service_id' => 'required',
            //    'costumer_id' => 'required'
           ]);
   
           //create command
           return Posts::create([
               'post' => request('post'),
               'costumer_id'=>request('costumer_id'),
            //    'date'=>current_timestamp(),

               'rule' => request('rule')
   
   
           ]);
       }

   
       function changeState(Posts $post){
           return $post->update([
               'rule' => request('rule')
           ]);
   
   
       }
       // Update (PUT) function
       function update1(Posts $post)
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
           return $post->update([
   
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
       function destroy1(Posts $post)
       {

           return  $post->delete();
       }



































}
