<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProcessContainersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('process_containers', function (Blueprint $table) {


            // Recupertation id demarche
            $table->unsignedBigInteger('process_id');
            $table->foreign('process_id')
                ->references('process_id')
                ->on('processes')
                ->onDelete('cascade')
                ->onUpdate('cascade');


            // Recupertation id container
            $table->unsignedBigInteger('container_id');
            $table->foreign('container_id')
                ->references('container_id')
                ->on('containers')
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
        Schema::dropIfExists('process_containers');
    }
}
