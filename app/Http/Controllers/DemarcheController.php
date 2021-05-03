<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\Demarche;
use App\models\Container;
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
       $demarches   = DB::table('containers')
       ->Join('demconts', 'containers.container_id', '=', 'demconts.container_id')
       ->Join('demarches', 'demarches.demarche_id', '=', 'demconts.demarche_id')
       ->select('demarches.*',"containers.*")
       ->get();
      return $demarches;

    }
}
