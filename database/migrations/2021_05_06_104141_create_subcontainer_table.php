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
            0 => [
              'subcontainer_id' => '1',
              'subcontainer_name' => 'Démarches',
              'container_id' => '2',
            ],
            1 => [
              'subcontainer_id' => '2',
              'subcontainer_name' => 'Marchés',
              'container_id' => '2',
            ],
            2 => [
              'subcontainer_id' => '3',
              'subcontainer_name' => 'Événement',
              'container_id' => '2',
            ],
            3 => [
              'subcontainer_id' => '4',
              'subcontainer_name' => 'Taxi',
              'container_id' => '2',
            ],
            4 => [
              'subcontainer_id' => '5',
              'subcontainer_name' => 'Contact',
              'container_id' => '2',
            ],
            5 => [
              'subcontainer_id' => '6',
              'subcontainer_name' => 'Démarches',
              'container_id' => '3',
            ],
            6 => [
              'subcontainer_id' => '7',
              'subcontainer_name' => 'Contact',
              'container_id' => '3',
            ],
            7 => [
              'subcontainer_id' => '8',
              'subcontainer_name' => 'Aide au déménagement',
              'container_id' => '4',
            ],
            8 => [
              'subcontainer_id' => '9',
              'subcontainer_name' => 'Mon accès à l\'air piétonne (Centre Ancien)',
              'container_id' => '4',
            ],
            9 => [
              'subcontainer_id' => '10',
              'subcontainer_name' => 'Eau potable',
              'container_id' => '4',
            ],
            10 => [
              'subcontainer_id' => '11',
              'subcontainer_name' => 'Déchets',
              'container_id' => '4',
            ],
            11 => [
              'subcontainer_id' => '12',
              'subcontainer_name' => 'Citoyen',
              'container_id' => '4',
            ],
            12 => [
              'subcontainer_id' => '13',
              'subcontainer_name' => 'Identité',
              'container_id' => '5',
            ],
            13 => [
              'subcontainer_id' => '14',
              'subcontainer_name' => 'État civil',
              'container_id' => '5',
            ],
            14 => [
              'subcontainer_id' => '15',
              'subcontainer_name' => 'Autres',
              'container_id' => '5',
            ],
            15 => [
              'subcontainer_id' => '16',
              'subcontainer_name' => 'Santé',
              'container_id' => '6',
            ],
            16 => [
              'subcontainer_id' => '17',
              'subcontainer_name' => 'Aides sociales',
              'container_id' => '6',
            ],
            17 => [
              'subcontainer_id' => '18',
              'subcontainer_name' => 'Aides familiales',
              'container_id' => '6',
            ],
            18 => [
              'subcontainer_id' => '19',
              'subcontainer_name' => 'Aides au logement',
              'container_id' => '6',
            ],
            19 => [
              'subcontainer_id' => '20',
              'subcontainer_name' => 'Aides au travail',
              'container_id' => '6',
            ],
            20 => [
              'subcontainer_id' => '21',
              'subcontainer_name' => 'Emploi',
              'container_id' => '7',
            ],
            21 => [
              'subcontainer_id' => '22',
              'subcontainer_name' => 'Aides',
              'container_id' => '7',
            ],
            22 => [
              'subcontainer_id' => '23',
              'subcontainer_name' => 'Formation',
              'container_id' => '7',
            ],
            23 => [
              'subcontainer_id' => '24',
              'subcontainer_name' => 'Retraite',
              'container_id' => '7',
            ],
            24 => [
              'subcontainer_id' => '25',
              'subcontainer_name' => 'Permis de conduire',
              'container_id' => '8',
            ],
            25 => [
              'subcontainer_id' => '26',
              'subcontainer_name' => 'Mon véhicule',
              'container_id' => '8',
            ],
            26 => [
              'subcontainer_id' => '27',
              'subcontainer_name' => 'Infractions',
              'container_id' => '8',
            ],
            27 => [
              'subcontainer_id' => '28',
              'subcontainer_name' => 'Co-voiturage',
              'container_id' => '8',
            ],
            28 => [
              'subcontainer_id' => '29',
              'subcontainer_name' => 'Mon accès à l\'air piétonne (Centre ancien)',
              'container_id' => '8',
            ],
            29 => [
              'subcontainer_id' => '30',
              'subcontainer_name' => 'Allocations logement',
              'container_id' => '9',
            ],
            30 => [
              'subcontainer_id' => '31',
              'subcontainer_name' => 'Urbanisme',
              'container_id' => '9',
            ],
            31 => [
              'subcontainer_id' => '32',
              'subcontainer_name' => 'Impôts',
              'container_id' => '10',
            ],
            32 => [
              'subcontainer_id' => '33',
              'subcontainer_name' => 'Justice',
              'container_id' => '10',
            ],
            33 => [
              'subcontainer_id' => '34',
              'subcontainer_name' => 'Engagement',
              'container_id' => '11',
            ],
            34 => [
              'subcontainer_id' => '35',
              'subcontainer_name' => 'Vie citoyenne',
              'container_id' => '11',
            ],
            35 => [
              'subcontainer_id' => '36',
              'subcontainer_name' => 'Je signale un incident',
              'container_id' => '11',
            ],
            36 => [
              'subcontainer_id' => '37',
              'subcontainer_name' => 'Petite enfance',
              'container_id' => '12',
            ],
            37 => [
              'subcontainer_id' => '38',
              'subcontainer_name' => 'École primaire',
              'container_id' => '12',
            ],
            38 => [
              'subcontainer_id' => '39',
              'subcontainer_name' => 'Collège',
              'container_id' => '12',
            ],
            39 => [
              'subcontainer_id' => '40',
              'subcontainer_name' => 'Lycée',
              'container_id' => '12',
            ],
            40 => [
              'subcontainer_id' => '41',
              'subcontainer_name' => 'Études suppérieures',
              'container_id' => '12',
            ],
            41 => [
              'subcontainer_id' => '42',
              'subcontainer_name' => 'Autres',
              'container_id' => '12',
            ],
            42 => [
              'subcontainer_id' => '43',
              'subcontainer_name' => 'Déchetterie',
              'container_id' => '13',
            ],
            43 => [
              'subcontainer_id' => '44',
              'subcontainer_name' => 'Permis de végétaliser',
              'container_id' => '13',
            ],
            44 => [
              'subcontainer_id' => '45',
              'subcontainer_name' => 'Service des Eaux',
              'container_id' => '13',
            ],
            45 => [
              'subcontainer_id' => '46',
              'subcontainer_name' => 'Aide et Solidarité',
              'container_id' => '14',
            ],
            46 => [
              'subcontainer_id' => '47',
              'subcontainer_name' => 'Sports',
              'container_id' => '15',
            ],
            47 => [
              'subcontainer_id' => '48',
              'subcontainer_name' => 'Organiser un évènement',
              'container_id' => '15',
            ],
            48 => [
              'subcontainer_id' => '49',
              'subcontainer_name' => 'Culture',
              'container_id' => '15',
            ],
            49 => [
              'subcontainer_id' => '50',
              'subcontainer_name' => 'Démarches',
              'container_id' => '16',
            ],
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
