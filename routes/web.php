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

Route::get('/demarches', 'App\Http\Controllers\DemarcheController@Get');
Route::post('/email', 'App\Http\Controllers\EmailController@Create');
Route::post('/emails', 'App\Http\Controllers\EmailController@Get');
Route::get('/scanner', 'App\Http\Controllers\ScannerController@page');
Route::post('/scanner/upload', 'App\Http\Controllers\ScannerController@upload')->name('dwtupload.upload');

 Route::get( '/{path?}', function(){
    return view( 'welcome' );
} )->where('path', '.*');
