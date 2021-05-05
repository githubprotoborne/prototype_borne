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
         ->join('process_providers','process_providers.process_id','=','processes.process_id')
         ->join('providers','providers.provider_id','=','process_providers.provider_id')
         ->where('processes.process_name',$process_name)->get();



        // $processOne = Process::where('process_name',$process_name)->get();
        return $processOne;
    }

}
