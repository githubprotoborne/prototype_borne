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

    public function ImportProcess(Process $process){
        $processes = $process::all();
        return $processes;
    }

    public function ProcessShow($process_name)
    {
        $processOne = Process::select("processes.*","providers.*")
         ->leftJoin('providers','providers.provider_id','=','processes.provider_id')
         ->where('processes.process_name',$process_name)->get();

         $processAnex = Process::select("annex_documents.*")
         ->join('process_annex_documents','processes.process_id','=','process_annex_documents.process_id')
         ->join('annex_documents','annex_documents.annex_document_id','=','process_annex_documents.annex_document_id')
         ->where('processes.process_name',$process_name)->get();

        return [ 'processOne' => $processOne, 'processAnex' => $processAnex];
    }
}
