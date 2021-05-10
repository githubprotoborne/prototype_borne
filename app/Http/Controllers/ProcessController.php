<?php

namespace App\Http\Controllers;

use App\Models\Process;
use Illuminate\Http\Request;

class ProcessController extends Controller
{
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
