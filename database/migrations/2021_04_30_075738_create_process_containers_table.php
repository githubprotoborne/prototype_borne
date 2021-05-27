<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\ProcessContainer;


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
            $table->unsignedInteger('process_id')->unsigned();
            $table->foreign('process_id')
                ->references('process_id')
                ->on('processes')
                ->onDelete('cascade')
                ->onUpdate('cascade');


            // Recupertation id container
            $table->unsignedInteger('container_id')->unsigned();
            $table->foreign('container_id')
                ->references('container_id')
                ->on('containers')
                ->onDelete('cascade')
                ->onUpdate('cascade');



       
        });
        $data = [
            ['process_id'=>1,'container_id'=>1],
            ['process_id'=>2,'container_id'=>2],
            ['process_id'=>3,'container_id'=>1],
            ['process_id'=>3,'container_id'=>16],
            //...
        ];
        
      //  ProcessContainer::insert($data);


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
