<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/******User routes*******/
Route::group(['prefix' => 'auth'], function ($router) {
  Route::post('register', 'AuthController@register');
  Route::post('login', 'AuthController@login');
  Route::post('logout', 'AuthController@logout');
  Route::post('refresh', 'AuthController@refresh');
  Route::post('me', 'AuthController@me');
});

Route::post('/company/{id}', 'CompanyController@update');
Route::resource('/company', 'CompanyController')->except([
    'create', 'show	'
]);
Route::post('/employe/{id}', 'EmployeController@update');
Route::resource('/employe', 'EmployeController')->except([
    'create', 'show	'
]);
