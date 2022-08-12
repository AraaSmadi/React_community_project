<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    use HasFactory;
    // protected $table="posts";
    protected $fillable=[
        'Date',
        'post',
        'rule',
        'likes',
        'costumer_id'
    ] ;
}
