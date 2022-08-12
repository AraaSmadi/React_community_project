<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\CostumersController;
use App\Http\Controllers\CommentsPostController;

use App\Http\Controllers\ServicesController;
use App\Http\Controllers\CategoriesController;

use App\Http\Controllers\PostsController;
use App\Http\Controllers\BooksController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\AdminController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*Login and Register */
 Route::post('register', [CostumersController::class, 'registerAPI']);
 Route::post('login', [CostumersController::class, 'loginAPI']);
 /* login Admin */
 Route::post('loginAdmin', [AdminController::class, 'loginAdm']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//view user info
Route::get('/profile/{id}',[CostumersController::class,'index']);

//edit user info
Route::post('/profile',[CostumersController::class,'store']);
Route::post('/profile/{id}',[CostumersController::class,'update']);
Route::get('/profile/{id}',[CostumersController::class,'edit']);











// Route::post('/post',[PostsController::class,'store']);
// Route::get('/posts',[PostsController::class,'create']);




// comment on post
Route::post('/comments_post',[CommentsPostController::class,'store']);
Route::get('/comments/{id}',[CommentsPostController::class,'create']);
Route::get('/commentor/{id}',[CostumersController::class,'view']);
Route::post('/comments_post',[CommentsPostController::class,'store']);
Route::post('/comment/{id}',[CommentsPostController::class,'update']);
Route::get('/comments_post/{id}',[CommentsPostController::class,'edit']);
Route::delete('/comment/{comment}',[CommentsPostController::class,'delete']);
Route::delete('/comment/{id}',[CommentsPostController::class,'index']);







//Araa
// start Post
Route::post('/post',[PostsController::class,'store']);
Route::get('/attempt',[PostsController::class,'create']);
Route::get('/fetch/{id}',[PostsController::class,'show']);
Route::get('update/{id}',[PostsController::class,'update']);

Route::get('/userposts/{id}',[PostsController::class,'view']);

Route::get('/post/{id}',[PostsController::class,'viewP']);
Route::put('/viewComments/{id}',[PostsController::class,'viewComments']);
// Route::get('images', [PostsController::class, 'index'])->name('images');
// Route::post('images', [PostsController::class, 'upload'])->name('images');
// Route::post('/post',[CommentsPostController::class,'store']);


Route::get('/catogry/{id}',[ServicesController::class,'view']);

Route::get('/product/{id}',[ServicesController::class,'view2']);































































































////// **** Admin Routes **** /////



Route::get('/costumers',[CostumersController::class,'index1']);
Route::get('/costumers/{id}',[CostumersController::class,'single1']);
Route::post('/costumers',[CostumersController::class,'store1']);
Route::put('/costumers/{costumer}',[CostumersController::class,'update1']);
Route::delete('/costumers/{costumer}',[CostumersController::class,'destroy1']);



Route::get('/google/{email}',[CostumersController::class,'google']);
Route::post('/googlereg',[CostumersController::class,'googlereg']);



Route::get('/services',[ServicesController::class,'index']);
Route::get('/services/{id}',[ServicesController::class,'single']);
Route::post('/services',[ServicesController::class,'store']);
Route::put('/services/{service}',[ServicesController::class,'update']);
Route::delete('/services/{service}',[ServicesController::class,'destroy']);



Route::get('/categories',[CategoriesController::class,'index']);
Route::get('/categories/{id}',[CategoriesController::class,'single']);
Route::post('/categories',[CategoriesController::class,'store']);
Route::put('/categories/{category}',[CategoriesController::class,'update']);
Route::delete('/categories/{category}',[CategoriesController::class,'destroy']);




Route::get('/books',[BooksController::class,'index1']);
Route::get('/books/{id}',[BooksController::class,'single1']);
Route::post('/booksss',[BooksController::class,'store1']);
Route::put('/books/{book}',[BooksController::class,'update1']);
Route::put('/booksstate/{book}',[BooksController::class,'changeState']);
Route::delete('/books/{book}',[BooksController::class,'destroy1']);




Route::get('/posts',[PostsController::class,'index1']);
Route::get('/posts/{id}',[PostsController::class,'single1']);
Route::post('/posts',[PostsController::class,'store1']);
Route::put('/posts/{post}',[PostsController::class,'update1']);
Route::put('/postsstate/{post}',[PostsController::class,'changeState']);
Route::delete('/posts/{post}',[PostsController::class,'destroy1']);













////// **** Admin Routes  end **** /////



// start Booking
Route::post('/book',[BooksController::class,'store']);
Route::get('/books/{id}',[BooksController::class,'create']);
// end Booking
//Araa



















//start contact

Route::post('/contact',[ContactController::class,'store']);

//end contact



