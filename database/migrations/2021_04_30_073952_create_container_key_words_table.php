<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContainerKeyWordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        
        Schema::create('container_key_words', function (Blueprint $table) {
            
            $table->unsignedInteger('container_id')->unsigned();
            $table->foreign('container_id')
                ->references('container_id')
                ->on('containers')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->unsignedInteger('key_word_id')->unsigned();
            $table->foreign('key_word_id')
                ->references('key_word_id')
                ->on('key_words')
                ->onDelete('cascade')
                ->onUpdate('cascade');

                $table->timestamps();
                Schema::enableForeignKeyConstraints();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('container_key_words');
    }
}
