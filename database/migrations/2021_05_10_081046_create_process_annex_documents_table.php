<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProcessAnnexDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
<<<<<<< HEAD:database/migrations/2021_05_10_081046_create_process_annex_documents_table.php
        Schema::create('process_annex_documents', function (Blueprint $table) {
           
            $table->unsignedBigInteger('process_id');
=======
        Schema::create('process_providers', function (Blueprint $table) {
            
            $table->unsignedBigInteger('process_id')->unsigned();
>>>>>>> eff9a9b724f9afbb239506f7e74a99af7e81413b:database/migrations/2021_04_30_075427_create_process_providers_table.php
            $table->foreign('process_id')
                ->references('process_id')
                ->on('processes')
                ->onDelete('cascade')
                ->onUpdate('cascade');


            // Recupertation id container
            $table->unsignedBigInteger('annex_document_id');
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
        Schema::dropIfExists('process_providers');
    }
}
