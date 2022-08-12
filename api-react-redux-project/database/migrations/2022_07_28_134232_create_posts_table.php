<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->timestamp('Date')->useCurrent();
            $table->text('post');
            $table->integer('rule')->default(0);
            $table->integer('likes')->default(0);

            $table->foreignId('costumer_id')->nullable()->constrained('costumers')->onDelete('cascade');


            // $table->foreignId('costumer_id')->nullable()->constrained('costumers');

            // $table->foreignId('costumer_id')->nullable()->constrained('costumers');

            // $table->foreignId('costumer_id')->nullable()->constrained('costumers');


            // $table->foreignId('costumer_id')->nullable()->constrained('costumers');

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
        Schema::dropIfExists('posts');
    }
}
