<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDemarchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('demarches', function (Blueprint $table) {
            $table->increments('demarche_id');
            $table->string('demarche_name', 100);
            $table->text('demarche_description');
            $table->text('demarche_link');
            $table->boolean('demarche_draft_mode');
            $table->string('demarche_duration',10);

            $table->unsignedBigInteger('fournisseur_id');
            $table->foreign('fournisseur_id')
                ->references('fournisseur_id')
                ->on('fournisseurs')
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
        Schema::dropIfExists('demarches');
    }
}




