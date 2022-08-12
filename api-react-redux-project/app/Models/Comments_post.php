<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comments_post extends Model
{
    use HasFactory;
    protected $table="comments_posts";

    protected $fillable=[
        'comment',
  
    ] ;
}
