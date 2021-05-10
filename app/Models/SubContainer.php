<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubContainer extends Model
{
    use HasFactory;
    protected $table = 'subcontainer';
    
    public $timestamps = false;

}
