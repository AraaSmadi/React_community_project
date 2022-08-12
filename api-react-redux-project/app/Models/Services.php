<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Services extends Model
{
    use HasFactory;
    protected $fillable=[
        'title',
        'description',
        'price',
        'min_price',
        'max_price',
        'picture',
        'picture_two',
        'picture_three',
        'picture_four',
        'picture_five',
        'picture_six',
        'categories_id',
        'gategury'

    ];
}
