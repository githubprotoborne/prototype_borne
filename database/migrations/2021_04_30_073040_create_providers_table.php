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
            $table->increments("provider_id");
            $table->string("provider_name",100);
            $table->text("provider_phone");
            $table->text("provider_mail");
            $table->timestamps();
        });

        $data = [

            ['provider_id'=>1,
            'provider_name'=>"Simplici",
            'provider_phone'=> '04 79 60 20 20',
            'provider_mail'=> 'Simplici@mail.fr'
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
