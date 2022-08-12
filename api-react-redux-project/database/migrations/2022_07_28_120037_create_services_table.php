<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();

            $table->string('title');
            $table->text('description');
            $table->decimal('price', 9, 2);
            $table->string('picture')->nullable();
            $table->string('picture_two')->nullable();
            $table->string('picture_three')->nullable();
            $table->string('picture_four')->nullable();
            $table->string('picture_five')->nullable();
            $table->string('picture_six')->nullable();
            $table->foreignId('categories_id')->nullable()->constrained('categories');
            $table->string('gategury')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('services');
    }
}
