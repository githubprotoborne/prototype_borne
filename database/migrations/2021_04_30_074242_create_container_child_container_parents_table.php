<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\ContainerChildContainerParent;

class CreateContainerChildContainerParentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('container_child_container_parents', function (Blueprint $table) {
            
           // Recupertation id container enfant 
           $table->unsignedBigInteger('container_id_child');
           $table->foreign('container_id_child')
               ->references('container_id')
               ->on('containers')
               ->onDelete('cascade')
               ->onUpdate('cascade');


           // Recupertation id container parent
           $table->unsignedBigInteger('container_id_parent');
           $table->foreign('container_id_parent')
               ->references('container_id')
               ->on('containers')
               ->onDelete('cascade')
               ->onUpdate('cascade');

            $table->timestamps();
        });

        // $data = [

    
        // ];
        // ContainerChildContainerParent::insert($data);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('container_child_container_parents');
    }
}
