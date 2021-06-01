<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Process;
use App\Models\Container;
use Illuminate\Support\Facades\DB;
/**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
class DemarcheController extends Controller
{
    //
    public function Get(Request $request,Container $container){

       // $demarches = $demarche::where('container_id', 1)  ->get();
          
       //$demarches = $container::all();
       $id = $request->input('id');
       $demarches   = DB::table('containers')
       
       ->Join('process_containers', 'containers.container_id', '=', 'process_containers.container_id')
       ->Join('processes', 'processes.process_id', '=', 'process_containers.process_id')
       ->select('processes.*',"containers.*")
       ->where('containers.container_id', '=',$id)
       ->get();
    
      return $demarches;

    }
}
