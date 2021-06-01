<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Container;
class ContainerController extends Controller
{
    public function Get( Container $container,Request $request){
        $containers =$container::all();
        return "";

    }
    //
    public function GetFourFirst( Container $container,Request $request){
        $containers =$container::all();
        return $containers;

    }
   

}
