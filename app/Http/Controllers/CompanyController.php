<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Requests\CreateCompanieRequest;
use Storage;
use App\Company;


class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $companyes = Company::all();
        return response()->json($companyes, 200);

        // return view('company.index',['companyes'=>$companyes]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // var_dump($request);
        //
        $logoName = '';
       if ($request->file('logo'))
       {
           $logoName = $request->file('logo')->store('/public');
           $logoName = str_replace('public', 'storage', $logoName);
       }
       $company = new Company();
       $company->name = $request['name'];
       $company->email = $request['email'];
       $company->logo = $logoName;
       $company->website = $request['website'];

    //
    var_dump($company);
    return response()->json(['company' => $company]);
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
    public function update(Request $request, $id)
    {
        //
        $logoName = '';
      if ($request->file('logo'))
      {
         $logoName = $request->file('logo')->store('/public');
         $logoName = str_replace('public', 'storage', $logoName);
     }

     $comp = Company::find($request->input('id'))
     ->update(['name' => $request->input('name'),
      'email' => $request->input('email'),
      'logo' => $logoName,
      'website' => $request->input('website')]);

     return response()->json($comp, 200);
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
        $company = Company::find($id);
      $company->delete();
      return response(null, Response::HTTP_OK);
    }
}
