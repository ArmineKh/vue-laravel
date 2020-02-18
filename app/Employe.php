<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employe extends Model
{
    //
    protected $table = 'employe';
    protected $fillable = ['firstname', 'lastname', 'department', 'phone'];

public function company()
{
   return $this->belongsTo('App\Company');
}
}
