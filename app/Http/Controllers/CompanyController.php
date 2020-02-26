<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCompanyRequest;
use Illuminate\Http\Response;
use App\Models\Company;
use App\Http\Resources\CompanyResource;
use Illuminate\Http\Request;
use Storage;
use Validator;



class CompanyController extends Controller
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
        $companyes = Company::all();
        return  CompanyResource::collection($companyes, 200);
    }

    /**
    * Store a newly created resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
    public function store(CreateCompanyRequest $request)
    {
        $logoName = '';
        if ($request->file('logo'))
        {
            $logoName = $request->file('logo')->store('/public');
            $logoName = str_replace('public', 'storage', $logoName);
        }
        $company = Company::create($request->all());
        $company->logo = $logoName;
        $company->save();
        if ($company) {
            return new CompanyResource($company, 201);
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
        $company = Company::find($id);
        return new CompanyResource($company, 200);
    }

    /**
    * Update the specified resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
    public function update(CreateCompanyRequest $request, $id)
    {
        $logoName = '';
        if ($request->file('logo'))
        {
            $logoName = $request->file('logo')->store('/public');
            $logoName = str_replace('public', 'storage', $logoName);
        }
        // $comp = Company::find($id)->update($request->all());
        $comp = Company::find($id)->update([
            'name' => $request->name,
            'email' => $request->email,
            'logo' => $logoName,
            'website' => $request->website,
        ]);
        if ($comp) {
            return response(null, 201);
        }else{
            return response(null, 204);
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
        $company = Company::find($id);
        $company->delete();
        if ($company) {
            return response(null, 400);
        }else {
            return response(null, 204);
        }

    }
}
