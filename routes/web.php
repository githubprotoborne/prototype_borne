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

Route::post('/email', 'App\Http\Controllers\EmailController@Create');
Route::get('/emails', 'App\Http\Controllers\EmailController@Get');

Route::get('/getprocesses', 'App\Http\Controllers\ProcessController@ImportProcess');
Route::get('/getprocess/{process_name}', 'App\Http\Controllers\ProcessController@ProcessShow');

Route::get( '/{path?}', function(){
    return view( 'welcome' );
} )->where('path', '.*');
