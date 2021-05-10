<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Process;

class CreateProcessesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('processes', function (Blueprint $table) {
            $table->increments('process_id');
            $table->string('process_name', 100);
            $table->text('process_description');
            $table->text('process_link');
            $table->boolean('process_draft_mode');
            $table->string('process_duration',10);

            $table->unsignedBigInteger('provider_id');
            $table->foreign('provider_id')
                ->references('provider_id')
                ->on('providers')
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
        Schema::dropIfExists('processes');
    }
}
