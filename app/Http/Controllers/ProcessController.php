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
                             'processes.*','subcontainer.*','containers.*'
                    )
                    ->join('subcontainer_process', 'subcontainer.subcontainer_id', '=', 'subcontainer_process.subcontainer_id')
                    ->join('processes', 'processes.process_id', '=', 'subcontainer_process.process_id')
                    ->join('containers', 'subcontainer.container_id', '=', 'containers.container_id')
                    ->where('subcontainer.container_id', '=',$id)
                    
                    ->orderBy('subcontainer.subcontainer_id')
                    ->get();
         return $processes;
    }
    
    public function ImportProcess(Process $process){
        $processes = $process::all();
        return $processes;
    }

    public function ProcessShow($process_name)
    {
        $processOne = Process::select("processes.*","providers.*")
         ->leftJoin('providers','providers.provider_id','=','processes.provider_id')
         ->where('processes.process_name',$process_name)->get();

        

        return [ 'processOne' => $processOne, 'processAnex' => []];
    }
    public function test(Process $process,Request $request){
             $id = $request->input('id');
            
             return Process::select("*")
             ->where("processes.process_id",$id)->get();
       }
}
