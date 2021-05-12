<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\models\SubContainerProcess;

class CreateSubcontainerProcessTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subcontainer_process', function (Blueprint $table) {
          
            
            // Recupertation id demarche
            $table->unsignedBigInteger('process_id')->unsigned();
            $table->foreign('process_id')
                ->references('process_id')
                ->on('processes')
                ->onDelete('cascade')
                ->onUpdate('cascade');


            // Recupertation id subcontainer
            $table->unsignedBigInteger('subcontainer_id')->unsigned();
            $table->foreign('subcontainer_id')
                ->references('subcontainer_id')
                ->on('subcontainer')
                ->onDelete('cascade')
                ->onUpdate('cascade');

                Schema::enableForeignKeyConstraints();
        });
        
        $data = [
            ['process_id'=>1,'subcontainer_id'=>1],
            ['process_id'=>2,'subcontainer_id'=>1],
            ['process_id'=>3,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>1],
            ['process_id'=>2,'subcontainer_id'=>1],
            ['process_id'=>3,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>1],
            ['process_id'=>2,'subcontainer_id'=>1],
            ['process_id'=>3,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>1],
            ['process_id'=>2,'subcontainer_id'=>1],
            ['process_id'=>3,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>1],
            ['process_id'=>2,'subcontainer_id'=>1],
            ['process_id'=>3,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>1],
            ['process_id'=>2,'subcontainer_id'=>1],
            ['process_id'=>3,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>1],
            ['process_id'=>2,'subcontainer_id'=>1],
            ['process_id'=>3,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>1],
            ['process_id'=>2,'subcontainer_id'=>1],
            ['process_id'=>3,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>1],
            ['process_id'=>2,'subcontainer_id'=>1],
            ['process_id'=>3,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>1],
            ['process_id'=>2,'subcontainer_id'=>1],
            ['process_id'=>3,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>1],
            ['process_id'=>2,'subcontainer_id'=>1],
            ['process_id'=>3,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>1],
            ['process_id'=>2,'subcontainer_id'=>1],
            ['process_id'=>3,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>1],
            ['process_id'=>2,'subcontainer_id'=>1],
            ['process_id'=>3,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>1],
            ['process_id'=>2,'subcontainer_id'=>1],
            ['process_id'=>3,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>1],
            ['process_id'=>2,'subcontainer_id'=>1],
            ['process_id'=>3,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>1],
            ['process_id'=>2,'subcontainer_id'=>1],
            ['process_id'=>3,'subcontainer_id'=>2],
            ['process_id'=>1,'subcontainer_id'=>2],
            //...
        ];
        
        SubContainerProcess::insert($data);



    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('subcontainer_process');
    }
}
