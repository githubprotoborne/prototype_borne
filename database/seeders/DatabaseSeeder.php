<?php

namespace Database\Seeders;

use App\Models\Container;
use App\Models\ContainerKeyWord;
use App\Models\Key_word;
use App\Models\Process;
use App\Models\ProcessContainer;
use App\Models\ProcessProvider;
use App\Models\Provider;
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
                "container_name" => "Papiers et etat civil",
            ]
        );

        Key_word::create(
            [
                "key_word_text" => "Carte d'identité",
            ],
            [
                "key_word_text" => "Actes",
            ],
            [
                "key_word_text" => "Etranger",
            ]
        );
        
        Provider::create(
            [
                "provider_name" => "provider_name",
                "provider_phone" => "provider_phone",
                "provider_mail" => "provider_mail",
            ]
        );

        ContainerKeyWord::create(
            [
                "container_id" => 1,
                "key_word_id" => 1,
            ],
            [
                "container_id" => 1,
                "key_word_id" => 2,
            ],
            [
                "container_id" => 1,
                "key_word_id" => 3,
            ]
        );

        Process::create(
            [
                "process_name" => "Je souhaite un emplacement sur un marché",
                "process_description" => "Tantum autem cuique tribuendum, primum quantum ipse efficere possis, deinde etiam quantum ille quem diligas atque adiuves, sustinere. Non enim neque tu possis, quamvis excellas, omnes tuos ad honores amplissimos perducere, ut Scipio P. Rupilium potuit consulem efficere, fratrem eius L. non potuit. Quod si etiam possis quidvis deferre ad alterum, videndum est tamen, quid ille possit sustinere.",
                "process_link" => "link",
                "process_draft_mode" => 0,
                "process_duration" => 10,
            ]
        );

        ProcessProvider::create(
            [
                "process_id" => 1,
                "provider_id" => 1,
            ]
        );

        ProcessContainer::create(
            [
                "process_id" => 1,
                "container_id" => 1,
            ]
        );

    }
}
