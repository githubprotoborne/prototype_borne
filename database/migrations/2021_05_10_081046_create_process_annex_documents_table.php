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

        Schema::create('process_annex_documents', function (Blueprint $table) {
            
            $table->unsignedInteger('process_id')->unsigned();
            $table->foreign('process_id')
                ->references('process_id')
                ->on('processes')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->unsignedInteger('annex_document_id')->unsigned();
            $table->foreign('annex_document_id')
                ->references('annex_document_id')
                ->on('annex_documents')
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
        Schema::dropIfExists('process_annex_documents');
    }
}
