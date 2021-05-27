<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProcessAnnexDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *S
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('process_providers', function (Blueprint $table) {
            
            $table->unsignedInteger('process_id')->unsigned();
            $table->foreign('process_id')
                ->references('process_id')
                ->on('processes')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->unsignedInteger('provider_id')->unsigned();
            $table->foreign('provider_id')
                ->references('provider_id')
                ->on('providers')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            


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
        Schema::dropIfExists('process_providers');
    }
}
