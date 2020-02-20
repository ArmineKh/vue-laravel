<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\CreateCompanieRequest;
use Storage;
use App\Models\Company;


class CompanyController extends Controller
{
    /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
    public function index()
    {
        $companyes = Company::all();
        return response()->json($companyes, 200);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
    public function store(CreateCompanieRequest $request)
    {
        $logoName = '';
        if ($request->file('logo'))
        {
            $logoName = $request->file('logo')->store('/public');
            $logoName = str_replace('public', 'storage', $logoName);
        }
        $company = Company::create($request->all())->expect(logo);
        $company->logo = $logoName;
        $company->save();

        return response()->json(['company' => $company], 201);
    }


    /**
    * Show the form for editing the specified resource.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
    public function edit($id)
    {
        $company = Company::find($id);
        return response()->json($company, 200);
    }

    /**
    * Update the specified resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
    public function update(CreateCompanieRequest $request, $id)
    {
        // dd($request->all());

        $logoName = '';
        if ($request->file('logo'))
        {
            $logoName = $request->file('logo')->store('/public');
            $logoName = str_replace('public', 'storage', $logoName);
        }
        $comp = Company::find($id)->fill($request->all())->expect('logo');
        $comp->logo = $logoName;
        $comp->save();

        return response()->json($comp, 201);
    }

    /**
    * Remove the specified resource from storage.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
    public function destroy($id)
    {

        $company = Company::find($id);
        $company->delete();
        return response(null, 200);
    }
}
