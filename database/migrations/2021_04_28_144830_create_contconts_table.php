<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContcontsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('contconts', function (Blueprint $table) {
          
            // Recupertation id container enfant 
            $table->unsignedBigInteger('container_id_enfant');
            $table->foreign('container_id_enfant')
                ->references('container_id')
                ->on('container')
                ->onDelete('restrict')
                ->onUpdate('restrict');


            // Recupertation id container parent
            $table->unsignedBigInteger('container_id_parent');
            $table->foreign('container_id_parent')
                ->references('container_id')
                ->on('container')
                ->onDelete('restrict')
                ->onUpdate('restrict');

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
        Schema::dropIfExists('contconts');
    }
}
