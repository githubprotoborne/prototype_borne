<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\models\Demarche;

class CreateDemarchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('demarches', function (Blueprint $table) {
            $table->increments('demarche_id');
            $table->string('demarche_name', 100);
            $table->text('demarche_description');
            $table->text('demarche_link');

           
    
           
            $table->timestamps();
        });
        $data = [
            ['demarche_name'=>"Renouvellement mensuel de la situation de demandeur d'emploi",'demarche_description'=>"pour cette demarche vous aurez besoin de",'demarche_link'=>"https://candidat.pole-emploi.fr/insc [ription/preambule"],
           
            //...
        ];
        
        Demarche::insert($data); // insert data with Eloquent approach
       // DB::table('table')->insert($data); // Query Builder approach
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('demarches');
    }
}




