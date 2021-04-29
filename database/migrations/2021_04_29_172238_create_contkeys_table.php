<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContkeysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contkeys', function (Blueprint $table) {

            $table->unsignedBigInteger('container_id');
            $table->foreign('container_id')
                ->references('container_id')
                ->on('container')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->unsignedBigInteger('key_word_id');
            $table->foreign('key_word_id')
                ->references('key_word_id')
                ->on('key_word')
                ->onDelete('cascade')
                ->onUpdate('cascade');

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
        Schema::dropIfExists('contkeys');
    }
}
