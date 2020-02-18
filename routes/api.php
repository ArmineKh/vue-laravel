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

Route::group(['prefix' => 'auth'], function ($router) {

  Route::post('register', 'AuthController@register');
  Route::post('login', 'AuthController@login');
  Route::post('logout', 'AuthController@logout');
  Route::post('refresh', 'AuthController@refresh');
  Route::post('me', 'AuthController@me');

});
Route::get('/company', 'CompanyController@index');
Route::post('/company', 'CompanyController@store');
Route::get('/company/update/{id}', 'CompanyController@edit');
Route::put('/company/{id}', 'CompanyController@update');
Route::delete('/company/{id}', 'CompanyController@destroy');


Route::get('/employe', 'EmployeController@index');
Route::post('/employe', 'EmployeController@store');
Route::get('/employe/update/{id}', 'EmployeController@edit');
Route::put('/employe/{id}', 'EmployeController@update');
Route::delete('/employe/{id}', 'EmployeController@destroy');


// Route::resource('company', 'CompanyController', [
//       'show' => false,
// ]);


// Route::resource('employe', 'EmployeController', [
//       'show' => false,
// ]);
