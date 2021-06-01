<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Demarche;
class Container extends Model
{
    use HasFactory;
    public function demarche(){
       
        return $this->belongsToMany(Demarche::class, 'demconts', 'container_id', 'demarche_id');
    }
}
