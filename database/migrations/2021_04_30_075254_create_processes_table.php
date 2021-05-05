<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Process;

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
            $table->timestamps();
        });
        $data = [

            ['process_id'=>1,
            'process_name'=>"Je souhaite un emplacement sur le marché", 
            "process_description"=> "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            "process_link"=>"link",
            "process_draft_mode"=>0,
            "process_duration"=>"10"
        ],
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
