<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
<<<<<<< HEAD
use App\models\Process;
=======
use App\Models\Process;
>>>>>>> 45f5f0d327543b92a4e123a775dc30a85d6c896e

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
        $data = [
            ['process_id'=>1,'process_name'=>"Demande de carte d'identité",'process_description'=>"Permet de demander sa carte d'identité",'process_link'=>"http://google.com",'process_draft_mode'=>false,'process_duration'=>"15 minutes"],
            ['process_id'=>2,'process_name'=>"compteur d'eau",'process_description'=>"permet d'ouvrir un compteur",'process_link'=>"http://google.com",'process_draft_mode'=>false,'process_duration'=>""],
            ['process_id'=>3,'process_name'=>"compteur d'électricité",'process_description'=>"permet d'ouvrir un compteur",'process_link'=>"http://google.com",'process_draft_mode'=>false,'process_duration'=>""],
            
            //...
        ];
        
        Process::insert($data);
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
