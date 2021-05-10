<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\Process;
use App\models\Container;
use App\models\SubContainer;
use Illuminate\Support\Facades\DB;

class ProcessController extends Controller
{
    //
    public function GetByContainer( Container $container,Request $request){
        $id = $request->input('id');
        $processes = DB::table('subcontainer')
       
                    ->select( 
                             'processes.*','subcontainer.*'
                    )
                    ->join('subcontainer_process', 'subcontainer.subcontainer_id', '=', 'subcontainer_process.subcontainer_id')
                    ->join('processes', 'processes.process_id', '=', 'subcontainer_process.process_id')
                    ->where('subcontainer.container_id', '=',$id)
                    
                    ->orderBy('subcontainer.subcontainer_id')
                    ->get();
       return $processes;
    }
}
