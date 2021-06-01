<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Container;

class Provider extends Model
{
    use HasFactory;
    public function container() {
        return $this->belongsToMany(Container::class, 'demconts',
         'container_id', 'demarche_id');
    }
}
