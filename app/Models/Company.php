<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = ['name', 'email', 'logo', 'website'];
    protected $table = 'company';

  public function employee()
    {
        return $this->hasMany('App\Employe');
    }
}
