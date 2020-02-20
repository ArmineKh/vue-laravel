<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\CreateEmployeeRequest;
use Storage;
use App\Models\Employe;



class EmployeController extends Controller
{
    /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function index()
    {
        $employees = Employe::all();
        return response()->json($employees, 200);
    }


    /**
    * Store a newly created resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
    public function store(CreateEmployeeRequest $request)
    {
        $employee = Employe::create($request->all());
        return response()->json($employee, 201);
    }


    /**
    * Show the form for editing the specified resource.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
    public function edit($id)
    {
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
    public function update(CreateEmployeeRequest $request, $id)
    {
        $employee = Employe::find($id)->fill($request->all())->save();
        return response()->json($employee, 201);
    }

    /**
    * Remove the specified resource from storage.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
    public function destroy($id)
    {
        $employee = Employe::find($id);
        $employee->delete();
        return response(null, 200);

    }
}
