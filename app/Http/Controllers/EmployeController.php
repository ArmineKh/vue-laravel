<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\CreateEmployeeRequest;
use Storage;
use App\Employe;



class EmployeController extends Controller
{
  /**
  * Display a listing of the resource.
  *
  * @return \Illuminate\Http\Response
  */
  public function index()
  {
    //
    $employees = Employe::all();
    return response()->json($employees, 200);

  }


  /**
  * Store a newly created resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @return \Illuminate\Http\Response
  */
  public function store(Request $request)
  {
    //
    $employee = new Employe();
    $employee->firstname = $request['firstname'];
    $employee->lastname = $request['lastname'];
    $employee->department = $request['department'];
    $employee->phone = $request['phone'];
    $employee->save();

    return response()->json($employee);
  }


  /**
  * Show the form for editing the specified resource.
  *
  * @param  int  $id
  * @return \Illuminate\Http\Response
  */
  public function edit($id)
  {
    //
    $employee = Employe::find($id);
    return response()->json($employee, 200);


  }

  /**
  * Update the specified resource in storage.
  *
  * @param  \Illuminate\Http\Request  $request
  * @param  int  $id
  * @return \Illuminate\Http\Response
  */
  public function update(Request $request, $id)
  {
    //
    $employee = Employe::find($id)
    ->update([
      'firstname' => $request->data['firstname'],
      'lastname' => $request->data['lastname'],
      'department' => $request->data['department'],
      'phone' => $request->data['phone'],
    ]);

    return response()->json($employee, 200);
  }

  /**
  * Remove the specified resource from storage.
  *
  * @param  int  $id
  * @return \Illuminate\Http\Response
  */
  public function destroy($id)
  {
    //
    $employee = Employe::find($id);
    $employee->delete();
    return response(null, Response::HTTP_OK);

  }
}
