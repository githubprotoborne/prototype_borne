<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\models\Container;
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
            ['container_name'=>"Je suis parent"],
            ['container_name'=>"nouvel arrivant"],
            //...
        ];
        
        Container::insert($data); // insert data with Eloquent approach
       // DB::table('table')->insert($data); // Query Builder approach
        
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
