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
        $employees = Employe::paginate(10);
      // return view('employee.index',['employees'=>$employees]);
      return response($employees->jsonSerialize(), Response::HTTP_OK);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(CreateEmployeeRequest $request)
    {
      $employee = Employe::create(['name' => $request->input('name'),
       'lastname' => $request->input('lastname'),
       'company' => $request->input('company'),
       'email' => $request->input('email'),
       'phone' => $request->input('phone')]);

    // return redirect()->route('employees.index')->with('info','Employee Added Successfully');
    return response($employee->jsonSerialize(), Response::HTTP_CREATED);

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
        $employee = Employee::find($id);
        // return view('employee.edit',['employee'=> $employee]);
        return response($employee->jsonSerialize(), Response::HTTP_OK);


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
        //
        $employee = Employee::find($request->input('id'))
        ->update(['name' => $request->input('name'),
         'lastname' => $request->input('lastname'),
         'company' => $request->input('company'),
         'email' => $request->input('email'),
         'phone' => $request->input('phone')]);

        // return redirect()->route('employees.index')->with('info','Employee Updated Successfully');
           return response(null, Response::HTTP_OK);
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
        $employee = Employee::find($id);
      $employee->delete();
      // return redirect()->route('employees.index');
      return response(null, Response::HTTP_OK);

    }
}
