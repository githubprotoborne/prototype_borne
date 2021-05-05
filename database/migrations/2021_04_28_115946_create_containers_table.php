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
            $table->increments('container_id');
            $table->string('container_name',100);
            $table->timestamps();
        });
        $data = [

            ['container_id'=>1,'container_name'=>"Je suis parent"],

            ['container_id'=>2,'container_name'=>"Je un particulier"]

        ];
        Container::insert($data);
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
