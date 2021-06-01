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
            $table->string("provider_proposed_by",100);
            $table->string("provider_service",100);
            $table->text("provider_phone")->nullable();
            $table->text("provider_phone_timetable")->nullable();
            $table->text("provider_postal_address")->nullable();
            $table->text("provider_postal_address_timetable")->nullable();
            $table->text("provider_postal_address_timetable_rdv")->nullable();
            $table->text("provider_write_online")->nullable();
            $table->timestamps();
        });

        $data=[
            0 => [
              'provider_id' => '1',
              'provider_proposed_by' => 'Ministère de l\'Économie des Finances et de la Relance',
              'provider_service' => '',
              'provider_phone' => '',
              'provider_phone_timetable' => "",
              'provider_postal_address' => '',
              'provider_postal_address_timetable' => '',
              'provider_postal_address_timetable_rdv' => '',
              'provider_write_online' => '',
            ],
            1 => [
              'provider_id' => '2',
              'provider_proposed_by' => 'Ministère de la Transformation et Fonction Publique',
              'provider_service' => '',
              'provider_phone' => '',
              'provider_phone_timetable' => "",
              'provider_postal_address' => '',
              'provider_postal_address_timetable' => '',
              'provider_postal_address_timetable_rdv' => '',
              'provider_write_online' => '',
            ],
            2 => [
              'provider_id' => '3',
              'provider_proposed_by' => 'Ministère de l\'Intérieur',
              'provider_service' => '',
              'provider_phone' => '',
              'provider_phone_timetable' => "",
              'provider_postal_address' => '',
              'provider_postal_address_timetable' => '',
              'provider_postal_address_timetable_rdv' => '',
              'provider_write_online' => '',
            ],
            3 => [
              'provider_id' => '4',
              'provider_proposed_by' => 'Ministère de la Justice',
              'provider_service' => '',
              'provider_phone' => '',
              'provider_phone_timetable' => "",
              'provider_postal_address' => '',
              'provider_postal_address_timetable' => '',
              'provider_postal_address_timetable_rdv' => '',
              'provider_write_online' => '',
            ],
            4 => [
              'provider_id' => '5',
              'provider_proposed_by' => 'Pôle emploi',
              'provider_service' => '',
              'provider_phone' => '',
              'provider_phone_timetable' => "",
              'provider_postal_address' => '',
              'provider_postal_address_timetable' => '',
              'provider_postal_address_timetable_rdv' => '',
              'provider_write_online' => '',
            ],
            5 => [
              'provider_id' => '6',
              'provider_proposed_by' => 'CAF',
              'provider_service' => '',
              'provider_phone' => '',
              'provider_phone_timetable' => "",
              'provider_postal_address' => '',
              'provider_postal_address_timetable' => '',
              'provider_postal_address_timetable_rdv' => '',
              'provider_write_online' => '',
            ],
            6 => [
              'provider_id' => '7',
              'provider_proposed_by' => 'Ministère des solidarités et de la santé',
              'provider_service' => '',
              'provider_phone' => '',
              'provider_phone_timetable' => "",
              'provider_postal_address' => '',
              'provider_postal_address_timetable' => '',
              'provider_postal_address_timetable_rdv' => '',
              'provider_write_online' => '',
            ],
            7 => [
              'provider_id' => '8',
              'provider_proposed_by' => 'Ministère chargé des affaires sociales',
              'provider_service' => '',
              'provider_phone' => '',
              'provider_phone_timetable' => "",
              'provider_postal_address' => '',
              'provider_postal_address_timetable' => '',
              'provider_postal_address_timetable_rdv' => '',
              'provider_write_online' => '',
            ],
            8 => [
              'provider_id' => '9',
              'provider_proposed_by' => 'Assurance retraite',
              'provider_service' => '',
              'provider_phone' => '',
              'provider_phone_timetable' => "",
              'provider_postal_address' => '',
              'provider_postal_address_timetable' => '',
              'provider_postal_address_timetable_rdv' => '',
              'provider_write_online' => '',
            ],
            9 => [
              'provider_id' => '10',
              'provider_proposed_by' => 'CNAF',
              'provider_service' => '',
              'provider_phone' => '',
              'provider_phone_timetable' => "",
              'provider_postal_address' => '',
              'provider_postal_address_timetable' => '',
              'provider_postal_address_timetable_rdv' => '',
              'provider_write_online' => '',
            ],
            10 => [
              'provider_id' => '11',
              'provider_proposed_by' => 'MSA',
              'provider_service' => '',
              'provider_phone' => '',
              'provider_phone_timetable' => "",
              'provider_postal_address' => '',
              'provider_postal_address_timetable' => '',
              'provider_postal_address_timetable_rdv' => '',
              'provider_write_online' => '',
            ],
            11 => [
              'provider_id' => '12',
              'provider_proposed_by' => 'Caisse nationale d\'assurance maladie (Cnam)',
              'provider_service' => '',
              'provider_phone' => '',
              'provider_phone_timetable' => "",
              'provider_postal_address' => '',
              'provider_postal_address_timetable' => '',
              'provider_postal_address_timetable_rdv' => '',
              'provider_write_online' => '',
            ],
            12 => [
              'provider_id' => '13',
              'provider_proposed_by' => 'Conservatoire national des arts et métiers',
              'provider_service' => '',
              'provider_phone' => '',
              'provider_phone_timetable' => "",
              'provider_postal_address' => '',
              'provider_postal_address_timetable' => '',
              'provider_postal_address_timetable_rdv' => '',
              'provider_write_online' => '',
            ],
            13 => [
              'provider_id' => '14',
              'provider_proposed_by' => 'Conservatoire national des arts et métiers,agirc arrco',
              'provider_service' => '',
              'provider_phone' => '',
              'provider_phone_timetable' => "",
              'provider_postal_address' => '',
              'provider_postal_address_timetable' => '',
              'provider_postal_address_timetable_rdv' => '',
              'provider_write_online' => '',
            ],
            14 => [
              'provider_id' => '15',
              'provider_proposed_by' => 'CPAM',
              'provider_service' => '',
              'provider_phone' => '',
              'provider_phone_timetable' => "",
              'provider_postal_address' => '',
              'provider_postal_address_timetable' => '',
              'provider_postal_address_timetable_rdv' => '',
              'provider_write_online' => '',
            ],
            15 => [
              'provider_id' => '16',
              'provider_proposed_by' => 'Poste',
              'provider_service' => '',
              'provider_phone' => '',
              'provider_phone_timetable' => "",
              'provider_postal_address' => '',
              'provider_postal_address_timetable' => '',
              'provider_postal_address_timetable_rdv' => '',
              'provider_write_online' => '',
            ],
            16 => [
              'provider_id' => '17',
              'provider_proposed_by' => 'Simpl\'ici Agglomération',
              'provider_service' => '',
              'provider_phone' => '',
              'provider_phone_timetable' => "",
              'provider_postal_address' => '',
              'provider_postal_address_timetable' => '',
              'provider_postal_address_timetable_rdv' => '',
              'provider_write_online' => '',
            ],
            17 => [
              'provider_id' => '18',
              'provider_proposed_by' => 'Simpl\'ici ville',
              'provider_service' => '',
              'provider_phone' => '',
              'provider_phone_timetable' => "",
              'provider_postal_address' => '',
              'provider_postal_address_timetable' => '',
              'provider_postal_address_timetable_rdv' => '',
              'provider_write_online' => '',
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
