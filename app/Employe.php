<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employe extends Model
{
    //
    protected $table = 'employe';
    protected $fillable = ['name', 'lastName', 'company', 'email', 'phone'];

public function company()
{
   return $this->belongsTo('App\Company');
}
}
