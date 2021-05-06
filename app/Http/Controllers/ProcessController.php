<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\Process;
use App\models\Container;
use Illuminate\Support\Facades\DB;

class ProcessController extends Controller
{
    //
    public function GetByContainer( Container $container,Request $request){
        $id = $request->input('id');
        $processes   = DB::table('containers')
        
        ->Join('process_containers', 'containers.container_id', '=', 'process_containers.container_id')
        ->Join('processes', 'processes.process_id', '=', 'process_containers.process_id')
        ->select('processes.*',"containers.*")
        ->where('containers.container_id', '=',$id)
        ->get();
       return $processes;
    }
}
