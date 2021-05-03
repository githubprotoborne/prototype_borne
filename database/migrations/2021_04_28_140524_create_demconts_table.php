<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\models\Demcont;


class CreateDemcontsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('demconts', function (Blueprint $table) {


            // Recupertation id container
            $table->unsignedBigInteger('container_id');
            $table->foreign('container_id')
                ->references('container_id')
                ->on('containers')
                ->onDelete('cascade')
                ->onUpdate('cascade');


            // Recupertation id demarche
            $table->unsignedBigInteger('demarche_id');
            $table->foreign('demarche_id')
                ->references('demarche_id')
                ->on('demarches')
                ->onDelete('cascade')
                ->onUpdate('cascade');

       
        });
        $data = [
            ['demarche_id'=>1,'container_id'=>1],
           
            //...
        ];
        
        Demcont::insert($data);


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('demconts');
    }
}
