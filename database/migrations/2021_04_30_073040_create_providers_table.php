<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Provider;

class CreateProvidersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('providers', function (Blueprint $table) {
            $table->increments("provider_id")->unsigned();
            $table->string("provider_name",100);
            $table->text("provider_phone")->nullable();
            $table->text("provider_mail")->nullable();
            $table->text("provider_postal_address")->nullable();
            $table->timestamps();
        });

        $data=[
            0 => [
              'provider_id' => '1',
              'provider_name' => 'Ministère de l\'Économie des Finances et de la Relance',
              'provider_phone' => '',
              'provider_postal_address' => '',
            ],
            1 => [
              'provider_id' => '2',
              'provider_name' => 'Ministère de la Transformation et Fonction Publique',
              'provider_phone' => '',
              'provider_postal_address' => '',
            ],
            2 => [
              'provider_id' => '3',
              'provider_name' => 'Ministère de l\'Intérieur',
              'provider_phone' => '',
              'provider_postal_address' => '',
            ],
            3 => [
              'provider_id' => '4',
              'provider_name' => 'Ministère de la Justice',
              'provider_phone' => '',
              'provider_postal_address' => '',
            ],
            4 => [
              'provider_id' => '5',
              'provider_name' => 'Pôle emploi',
              'provider_phone' => '',
              'provider_postal_address' => '',
            ],
            5 => [
              'provider_id' => '6',
              'provider_name' => 'CAF',
              'provider_phone' => '',
              'provider_postal_address' => '',
            ],
            6 => [
              'provider_id' => '7',
              'provider_name' => 'Ministère des solidarités et de la santé',
              'provider_phone' => '',
              'provider_postal_address' => '',
            ],
            7 => [
              'provider_id' => '8',
              'provider_name' => 'Ministère chargé des affaires sociales',
              'provider_phone' => '',
              'provider_postal_address' => '',
            ],
            8 => [
              'provider_id' => '9',
              'provider_name' => 'Assurance retraite',
              'provider_phone' => '',
              'provider_postal_address' => '',
            ],
            9 => [
              'provider_id' => '10',
              'provider_name' => 'CNAF',
              'provider_phone' => '',
              'provider_postal_address' => '',
            ],
            10 => [
              'provider_id' => '11',
              'provider_name' => 'MSA',
              'provider_phone' => '',
              'provider_postal_address' => '',
            ],
            11 => [
              'provider_id' => '12',
              'provider_name' => 'Caisse nationale d\'assurance maladie (Cnam)',
              'provider_phone' => '',
              'provider_postal_address' => '',
            ],
            12 => [
              'provider_id' => '13',
              'provider_name' => 'conservatoire national des arts et métiers',
              'provider_phone' => '',
              'provider_postal_address' => '',
            ],
            13 => [
              'provider_id' => '14',
              'provider_name' => 'Conservatoire national des arts et métiers,agirc arrco',
              'provider_phone' => '',
              'provider_postal_address' => '',
            ],
            14 => [
              'provider_id' => '15',
              'provider_name' => 'CPAM',
              'provider_phone' => '',
              'provider_postal_address' => '',
            ],
            15 => [
              'provider_id' => '16',
              'provider_name' => 'Poste',
              'provider_phone' => '',
              'provider_postal_address' => '',
            ],
            16 => [
              'provider_id' => '17',
              'provider_name' => 'Simpl\'ici Agglomération',
              'provider_phone' => '',
              'provider_postal_address' => '',
            ],
            17 => [
              'provider_id' => '18',
              'provider_name' => 'Simpl\'ici ville',
              'provider_phone' => '',
              'provider_postal_address' => '',
            ],
        ];
         
        Provider::insert($data);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('providers');
    }
}
