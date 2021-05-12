<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\models\Process;

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
            $table->increments('process_id')->unsigned();
            $table->string('process_name', 100);
            $table->text('process_description');
            $table->text('process_link');
            $table->boolean('process_draft_mode');
            $table->string('process_duration',10);
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
