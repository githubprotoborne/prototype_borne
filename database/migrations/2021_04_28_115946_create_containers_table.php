<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Container;
class CreateContainersTable extends Migration
{ 
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('containers', function (Blueprint $table) {
            $table->increments('container_id')->unsigned();
            $table->string('container_name',100);
            $table->string('container_description',200);
            $table->string('container_icon',200);
            
            $table->timestamps();
        });

        $data = [
            
            ['container_id'=>2,'container_name'=>"Je suis un professionnel",'container_description'=>'','container_icon'=>'storefront'],
            ['container_id'=>3,'container_name'=>"Je suis une association",'container_description'=>'','container_icon'=>'waving_hand'],
            ['container_id'=>4,'container_name'=>"Je suis un nouvel habitant",'container_description'=>'','container_icon'=>''],
            ['container_id'=>5,'container_name'=>"Papier et état civil",'container_description'=>'Carte d\'identité,Mariage,Titre de séjour','container_icon'=>'description'],
            ['container_id'=>6,'container_name'=>"Prestations sociales",'container_description'=>'Aide sociale,Santé,Famille','container_icon'=>'family_restroom,local_hospital,accessible'],
            ['container_id'=>7,'container_name'=>"Travail",'container_description'=>'Emploi,Retraite','container_icon'=>'construction'],
            ['container_id'=>8,'container_name'=>"Transports et déplacements",'container_description'=>'Permis de conduire,Carte grise,Infraction','container_icon'=>'directions_car,directions_bike,directions_bus_filled'],
            ['container_id'=>9,'container_name'=>"Logement et constructions",'container_description'=>'Allocation logement,Urbanisme','container_icon'=>'home_work'], //to complete container_icon
            ['container_id'=>10,'container_name'=>"Finances et justice",'container_description'=>'Déclarations des revenus,Timbre fiscal,Plaintes','container_icon'=>'euro'],
            ['container_id'=>11,'container_name'=>"Engagement, Eléctions",'container_description'=>'Signalements,Engagements,Elections','container_icon'=>'connect_without_contact'],
            ['container_id'=>12,'container_name'=>"Enfance,scolarité et études",'container_description'=>'Petite enfance,Garde,Bourse','container_icon'=>'child_care,school'],
            ['container_id'=>13,'container_name'=>"Environnement et eau potable",'container_description'=>'Déchetterie,Composte,Services des eaux','container_icon'=>'recycling,delete,water_drop'],
            ['container_id'=>14,'container_name'=>"Aide et solidarité",'container_description'=>'Alimentaire,Ecoute,Accompagnement','container_icon'=>'volunteer_activism'],
            ['container_id'=>15,'container_name'=>"Activités/Evenement",'container_description'=>'Sport,Pass\'culture','container_icon'=>'sports_soccer,museum'],
            ['container_id'=>16,'container_name'=>"Autres demandes",'container_description'=>'Demandes spécifiques,Contact','container_icon'=>'pending'],
            
           
           
            //...
        ];
        
        Container::insert($data); // insert data with Eloquent approach
        //DB::table('table')->insert($data); // Query Builder approach
       
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       
        Schema::dropIfExists('containers');
    }
}
