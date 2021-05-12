<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\SubContainer;

class CreateSubcontainerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        
        Schema::create('subcontainer', function($table) {
         
            $table->increments('subcontainer_id')->unsigned();
            $table->integer('container_id')->unsigned();
            $table->string('subcontainer_name',200);
          
          });
          Schema::table('subcontainer', function($table) {
            $table->foreign('container_id')->references('container_id')->on('containers');
        });
          $data=[
            ['subcontainer_id'=>1,'subcontainer_name'=>'Vehicule', 'container_id'=>1],
            ['subcontainer_id'=>2,'subcontainer_name'=>' taxes', 'container_id'=>1]
        ];
        SubContainer::insert($data);
      
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subcontainer');
    }
}
