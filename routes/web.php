<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/get-containers', 'App\Http\Controllers\ContainerController@Get');
Route::get('/demarches', 'App\Http\Controllers\DemarcheController@Get');
Route::post('/email', 'App\Http\Controllers\EmailController@Create');
Route::post('/emails', 'App\Http\Controllers\EmailController@Get');
Route::get('/first-containers', 'App\Http\Controllers\ContainerController@GetFourFirst');
Route::get('/get-processes', 'App\Http\Controllers\ProcessController@GetByContainer');
Route::get('/getprocesses', 'App\Http\Controllers\ProcessController@ImportProcess');
Route::get('/getprocess/{process_id}', 'App\Http\Controllers\ProcessController@ProcessShow');
Route::get('/get-process', 'App\Http\Controllers\ProcessController@test');


 Route::get( '/{path?}', function(){
    return view( 'welcome' );
} )->where('path', '.*');
