<?php

namespace Database\Seeders;

use App\Models\Container;
use App\Models\Contcont;
use App\Models\Demarche;
use App\Models\Demcont;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        

        Container::create(
            [
                'container_name' => 'test',
            ]
        );

        Demarche::create(
            [
                'demarche_name' => 'demarche 1',
                'demarche_description' => 'demarche_description 1',
                'demarche_link' => 'demarche_link 1',
            ]
        );

        Demcont::create(
            [
                'container_id' => 1,
                'demarche_id' => 1,
            ]
        );

        Contcont::create(
            [
                'container_id_enfant' => 1,
                'container_id_parent' => 2,
            ]
        );
    }
}
