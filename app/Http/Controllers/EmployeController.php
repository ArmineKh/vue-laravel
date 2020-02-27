<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use App\Http\Requests\CreateEmployeeRequest;
use App\Models\Employe;
use App\Http\Resources\EmployeResource;
use Illuminate\Http\Request;
use Storage;
use Validator;



class EmployeController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function index()
    {
        $employees = Employe::all();
        return EmployeResource::collection($employees, 200);
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
        if ($employee) {
            return response(null, 201);
        }else{
            return response(null, 400);
        }
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
        return new EmployeResource($employee, 200);
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
        $employee = Employe::find($id)->update($request->all());
        if ($employee) {
            return response(null, 201);
        }else{
            return response(null, 400);
        }
    }

    /**
    * Remove the specified resource from storage.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
    public function destroy($id)
    {
        if (Employe::destroy($id)) {
            return response(null, 204);
        }else{
            return response(null, 400);
        }
    }
}
