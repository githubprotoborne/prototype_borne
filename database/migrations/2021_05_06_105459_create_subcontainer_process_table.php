<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\SubContainerProcess;

class CreateSubcontainerProcessTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subcontainer_process', function (Blueprint $table) {
          
            
            // Recupertation id demarche
            $table->unsignedInteger('process_id')->unsigned();
            $table->foreign('process_id')
                ->references('process_id')
                ->on('processes')
                ->onDelete('cascade')
                ->onUpdate('cascade');


            // Recupertation id subcontainer
            $table->unsignedInteger('subcontainer_id')->unsigned();
            $table->foreign('subcontainer_id')
                ->references('subcontainer_id')
                ->on('subcontainer')
                ->onDelete('cascade')
                ->onUpdate('cascade');

                Schema::enableForeignKeyConstraints();
        });
        
        $data =[
            0 => [
              'subcontainer_id' => '1',
              'process_id' => '1',
            ],
            1 => [
              'subcontainer_id' => '1',
              'process_id' => '2',
            ],
            2 => [
              'subcontainer_id' => '1',
              'process_id' => '3',
            ],
            3 => [
              'subcontainer_id' => '1',
              'process_id' => '4',
            ],
            4 => [
              'subcontainer_id' => '1',
              'process_id' => '5',
            ],
            5 => [
              'subcontainer_id' => '1',
              'process_id' => '6',
            ],
            6 => [
              'subcontainer_id' => '1',
              'process_id' => '7',
            ],
            7 => [
              'subcontainer_id' => '1',
              'process_id' => '8',
            ],
            8 => [
              'subcontainer_id' => '1',
              'process_id' => '9',
            ],
            9 => [
              'subcontainer_id' => '1',
              'process_id' => '10',
            ],
            10 => [
              'subcontainer_id' => '1',
              'process_id' => '11',
            ],
            11 => [
              'subcontainer_id' => '1',
              'process_id' => '12',
            ],
            12 => [
              'subcontainer_id' => '1',
              'process_id' => '13',
            ],
            13 => [
              'subcontainer_id' => '2',
              'process_id' => '14',
            ],
            14 => [
              'subcontainer_id' => '3',
              'process_id' => '15',
            ],
            15 => [
              'subcontainer_id' => '3',
              'process_id' => '16',
            ],
            16 => [
              'subcontainer_id' => '4',
              'process_id' => '17',
            ],
            17 => [
              'subcontainer_id' => '5',
              'process_id' => '18',
            ],
            18 => [
              'subcontainer_id' => '5',
              'process_id' => '19',
            ],
            19 => [
              'subcontainer_id' => '6',
              'process_id' => '20',
            ],
            20 => [
              'subcontainer_id' => '6',
              'process_id' => '21',
            ],
            21 => [
              'subcontainer_id' => '6',
              'process_id' => '22',
            ],
            22 => [
              'subcontainer_id' => '6',
              'process_id' => '23',
            ],
            23 => [
              'subcontainer_id' => '7',
              'process_id' => '24',
            ],
            24 => [
              'subcontainer_id' => '7',
              'process_id' => '25',
            ],
            25 => [
              'subcontainer_id' => '8',
              'process_id' => '26',
            ],
            26 => [
              'subcontainer_id' => '8',
              'process_id' => '27',
            ],
            27 => [
              'subcontainer_id' => '8',
              'process_id' => '28',
            ],
            28 => [
              'subcontainer_id' => '9',
              'process_id' => '29',
            ],
            29 => [
              'subcontainer_id' => '9',
              'process_id' => '30',
            ],
            30 => [
              'subcontainer_id' => '9',
              'process_id' => '31',
            ],
            31 => [
              'subcontainer_id' => '10',
              'process_id' => '32',
            ],
            32 => [
              'subcontainer_id' => '10',
              'process_id' => '33',
            ],
            33 => [
              'subcontainer_id' => '10',
              'process_id' => '34',
            ],
            34 => [
              'subcontainer_id' => '10',
              'process_id' => '35',
            ],
            35 => [
              'subcontainer_id' => '10',
              'process_id' => '36',
            ],
            36 => [
              'subcontainer_id' => '10',
              'process_id' => '37',
            ],
            37 => [
              'subcontainer_id' => '10',
              'process_id' => '38',
            ],
            38 => [
              'subcontainer_id' => '10',
              'process_id' => '39',
            ],
            39 => [
              'subcontainer_id' => '10',
              'process_id' => '40',
            ],
            40 => [
              'subcontainer_id' => '11',
              'process_id' => '41',
            ],
            41 => [
              'subcontainer_id' => '11',
              'process_id' => '42',
            ],
            42 => [
              'subcontainer_id' => '11',
              'process_id' => '43',
            ],
            43 => [
              'subcontainer_id' => '11',
              'process_id' => '44',
            ],
            44 => [
              'subcontainer_id' => '11',
              'process_id' => '45',
            ],
            45 => [
              'subcontainer_id' => '11',
              'process_id' => '46',
            ],
            46 => [
              'subcontainer_id' => '11',
              'process_id' => '47',
            ],
            47 => [
              'subcontainer_id' => '11',
              'process_id' => '48',
            ],
            48 => [
              'subcontainer_id' => '11',
              'process_id' => '49',
            ],
            49 => [
              'subcontainer_id' => '12',
              'process_id' => '50',
            ],
            50 => [
              'subcontainer_id' => '12',
              'process_id' => '51',
            ],
            51 => [
              'subcontainer_id' => '13',
              'process_id' => '52',
            ],
            52 => [
              'subcontainer_id' => '13',
              'process_id' => '53',
            ],
            53 => [
              'subcontainer_id' => '13',
              'process_id' => '54',
            ],
            54 => [
              'subcontainer_id' => '13',
              'process_id' => '55',
            ],
            55 => [
              'subcontainer_id' => '13',
              'process_id' => '56',
            ],
            56 => [
              'subcontainer_id' => '14',
              'process_id' => '57',
            ],
            57 => [
              'subcontainer_id' => '14',
              'process_id' => '58',
            ],
            58 => [
              'subcontainer_id' => '14',
              'process_id' => '59',
            ],
            59 => [
              'subcontainer_id' => '15',
              'process_id' => '60',
            ],
            60 => [
              'subcontainer_id' => '15',
              'process_id' => '61',
            ],
            61 => [
              'subcontainer_id' => '15',
              'process_id' => '62',
            ],
            62 => [
              'subcontainer_id' => '16',
              'process_id' => '63',
            ],
            63 => [
              'subcontainer_id' => '16',
              'process_id' => '64',
            ],
            64 => [
              'subcontainer_id' => '16',
              'process_id' => '65',
            ],
            65 => [
              'subcontainer_id' => '16',
              'process_id' => '66',
            ],
            66 => [
              'subcontainer_id' => '16',
              'process_id' => '67',
            ],
            67 => [
              'subcontainer_id' => '16',
              'process_id' => '68',
            ],
            68 => [
              'subcontainer_id' => '16',
              'process_id' => '69',
            ],
            69 => [
              'subcontainer_id' => '16',
              'process_id' => '70',
            ],
            70 => [
              'subcontainer_id' => '16',
              'process_id' => '71',
            ],
            71 => [
              'subcontainer_id' => '17',
              'process_id' => '72',
            ],
            72 => [
              'subcontainer_id' => '17',
              'process_id' => '73',
            ],
            73 => [
              'subcontainer_id' => '17',
              'process_id' => '74',
            ],
            74 => [
              'subcontainer_id' => '18',
              'process_id' => '75',
            ],
            75 => [
              'subcontainer_id' => '18',
              'process_id' => '76',
            ],
            76 => [
              'subcontainer_id' => '18',
              'process_id' => '77',
            ],
            77 => [
              'subcontainer_id' => '18',
              'process_id' => '78',
            ],
            78 => [
              'subcontainer_id' => '18',
              'process_id' => '79',
            ],
            79 => [
              'subcontainer_id' => '18',
              'process_id' => '80',
            ],
            80 => [
              'subcontainer_id' => '18',
              'process_id' => '81',
            ],
            81 => [
              'subcontainer_id' => '18',
              'process_id' => '82',
            ],
            82 => [
              'subcontainer_id' => '18',
              'process_id' => '83',
            ],
            83 => [
              'subcontainer_id' => '18',
              'process_id' => '84',
            ],
            84 => [
              'subcontainer_id' => '18',
              'process_id' => '85',
            ],
            85 => [
              'subcontainer_id' => '18',
              'process_id' => '86',
            ],
            86 => [
              'subcontainer_id' => '19',
              'process_id' => '87',
            ],
            87 => [
              'subcontainer_id' => '19',
              'process_id' => '88',
            ],
            88 => [
              'subcontainer_id' => '19',
              'process_id' => '89',
            ],
            89 => [
              'subcontainer_id' => '19',
              'process_id' => '90',
            ],
            90 => [
              'subcontainer_id' => '19',
              'process_id' => '91',
            ],
            91 => [
              'subcontainer_id' => '20',
              'process_id' => '92',
            ],
            92 => [
              'subcontainer_id' => '20',
              'process_id' => '93',
            ],
            93 => [
              'subcontainer_id' => '20',
              'process_id' => '94',
            ],
            94 => [
              'subcontainer_id' => '20',
              'process_id' => '95',
            ],
            95 => [
              'subcontainer_id' => '20',
              'process_id' => '96',
            ],
            96 => [
              'subcontainer_id' => '21',
              'process_id' => '97',
            ],
            97 => [
              'subcontainer_id' => '21',
              'process_id' => '98',
            ],
            98 => [
              'subcontainer_id' => '21',
              'process_id' => '99',
            ],
            99 => [
              'subcontainer_id' => '21',
              'process_id' => '100',
            ],
            100 => [
              'subcontainer_id' => '21',
              'process_id' => '101',
            ],
            101 => [
              'subcontainer_id' => '21',
              'process_id' => '102',
            ],
            102 => [
              'subcontainer_id' => '21',
              'process_id' => '103',
            ],
            103 => [
              'subcontainer_id' => '21',
              'process_id' => '104',
            ],
            104 => [
              'subcontainer_id' => '21',
              'process_id' => '105',
            ],
            105 => [
              'subcontainer_id' => '21',
              'process_id' => '106',
            ],
            106 => [
              'subcontainer_id' => '21',
              'process_id' => '107',
            ],
            107 => [
              'subcontainer_id' => '21',
              'process_id' => '108',
            ],
            108 => [
              'subcontainer_id' => '22',
              'process_id' => '109',
            ],
            109 => [
              'subcontainer_id' => '22',
              'process_id' => '110',
            ],
            110 => [
              'subcontainer_id' => '22',
              'process_id' => '111',
            ],
            111 => [
              'subcontainer_id' => '22',
              'process_id' => '112',
            ],
            112 => [
              'subcontainer_id' => '23',
              'process_id' => '113',
            ],
            113 => [
              'subcontainer_id' => '23',
              'process_id' => '114',
            ],
            114 => [
              'subcontainer_id' => '24',
              'process_id' => '115',
            ],
            115 => [
              'subcontainer_id' => '24',
              'process_id' => '116',
            ],
            116 => [
              'subcontainer_id' => '24',
              'process_id' => '117',
            ],
            117 => [
              'subcontainer_id' => '24',
              'process_id' => '118',
            ],
            118 => [
              'subcontainer_id' => '24',
              'process_id' => '119',
            ],
            119 => [
              'subcontainer_id' => '24',
              'process_id' => '120',
            ],
            120 => [
              'subcontainer_id' => '24',
              'process_id' => '121',
            ],
            121 => [
              'subcontainer_id' => '24',
              'process_id' => '122',
            ],
            122 => [
              'subcontainer_id' => '24',
              'process_id' => '123',
            ],
            123 => [
              'subcontainer_id' => '24',
              'process_id' => '124',
            ],
            124 => [
              'subcontainer_id' => '24',
              'process_id' => '125',
            ],
            125 => [
              'subcontainer_id' => '24',
              'process_id' => '126',
            ],
            126 => [
              'subcontainer_id' => '24',
              'process_id' => '127',
            ],
            127 => [
              'subcontainer_id' => '24',
              'process_id' => '128',
            ],
            128 => [
              'subcontainer_id' => '24',
              'process_id' => '129',
            ],
            129 => [
              'subcontainer_id' => '24',
              'process_id' => '130',
            ],
            130 => [
              'subcontainer_id' => '24',
              'process_id' => '131',
            ],
            131 => [
              'subcontainer_id' => '24',
              'process_id' => '132',
            ],
            132 => [
              'subcontainer_id' => '24',
              'process_id' => '133',
            ],
            133 => [
              'subcontainer_id' => '24',
              'process_id' => '134',
            ],
            134 => [
              'subcontainer_id' => '24',
              'process_id' => '135',
            ],
            135 => [
              'subcontainer_id' => '25',
              'process_id' => '136',
            ],
            136 => [
              'subcontainer_id' => '25',
              'process_id' => '137',
            ],
            137 => [
              'subcontainer_id' => '25',
              'process_id' => '138',
            ],
            138 => [
              'subcontainer_id' => '25',
              'process_id' => '139',
            ],
            139 => [
              'subcontainer_id' => '25',
              'process_id' => '140',
            ],
            140 => [
              'subcontainer_id' => '25',
              'process_id' => '141',
            ],
            141 => [
              'subcontainer_id' => '25',
              'process_id' => '142',
            ],
            142 => [
              'subcontainer_id' => '25',
              'process_id' => '143',
            ],
            143 => [
              'subcontainer_id' => '25',
              'process_id' => '144',
            ],
            144 => [
              'subcontainer_id' => '26',
              'process_id' => '145',
            ],
            145 => [
              'subcontainer_id' => '26',
              'process_id' => '146',
            ],
            146 => [
              'subcontainer_id' => '26',
              'process_id' => '147',
            ],
            147 => [
              'subcontainer_id' => '26',
              'process_id' => '148',
            ],
            148 => [
              'subcontainer_id' => '26',
              'process_id' => '149',
            ],
            149 => [
              'subcontainer_id' => '26',
              'process_id' => '150',
            ],
            150 => [
              'subcontainer_id' => '26',
              'process_id' => '151',
            ],
            151 => [
              'subcontainer_id' => '26',
              'process_id' => '152',
            ],
            152 => [
              'subcontainer_id' => '27',
              'process_id' => '153',
            ],
            153 => [
              'subcontainer_id' => '27',
              'process_id' => '154',
            ],
            154 => [
              'subcontainer_id' => '27',
              'process_id' => '155',
            ],
            155 => [
              'subcontainer_id' => '28',
              'process_id' => '156',
            ],
            156 => [
              'subcontainer_id' => '29',
              'process_id' => '157',
            ],
            157 => [
              'subcontainer_id' => '29',
              'process_id' => '158',
            ],
            158 => [
              'subcontainer_id' => '29',
              'process_id' => '159',
            ],
            159 => [
              'subcontainer_id' => '30',
              'process_id' => '160',
            ],
            160 => [
              'subcontainer_id' => '30',
              'process_id' => '161',
            ],
            161 => [
              'subcontainer_id' => '30',
              'process_id' => '162',
            ],
            162 => [
              'subcontainer_id' => '30',
              'process_id' => '163',
            ],
            163 => [
              'subcontainer_id' => '30',
              'process_id' => '164',
            ],
            164 => [
              'subcontainer_id' => '30',
              'process_id' => '165',
            ],
            165 => [
              'subcontainer_id' => '30',
              'process_id' => '166',
            ],
            166 => [
              'subcontainer_id' => '30',
              'process_id' => '167',
            ],
            167 => [
              'subcontainer_id' => '30',
              'process_id' => '168',
            ],
            168 => [
              'subcontainer_id' => '31',
              'process_id' => '169',
            ],
            169 => [
              'subcontainer_id' => '31',
              'process_id' => '170',
            ],
            170 => [
              'subcontainer_id' => '31',
              'process_id' => '171',
            ],
            171 => [
              'subcontainer_id' => '31',
              'process_id' => '172',
            ],
            172 => [
              'subcontainer_id' => '32',
              'process_id' => '173',
            ],
            173 => [
              'subcontainer_id' => '32',
              'process_id' => '174',
            ],
            174 => [
              'subcontainer_id' => '32',
              'process_id' => '175',
            ],
            175 => [
              'subcontainer_id' => '32',
              'process_id' => '176',
            ],
            176 => [
              'subcontainer_id' => '32',
              'process_id' => '177',
            ],
            177 => [
              'subcontainer_id' => '33',
              'process_id' => '178',
            ],
            178 => [
              'subcontainer_id' => '33',
              'process_id' => '179',
            ],
            179 => [
              'subcontainer_id' => '33',
              'process_id' => '180',
            ],
            180 => [
              'subcontainer_id' => '33',
              'process_id' => '181',
            ],
            181 => [
              'subcontainer_id' => '33',
              'process_id' => '182',
            ],
            182 => [
              'subcontainer_id' => '33',
              'process_id' => '183',
            ],
            183 => [
              'subcontainer_id' => '33',
              'process_id' => '184',
            ],
            184 => [
              'subcontainer_id' => '34',
              'process_id' => '185',
            ],
            185 => [
              'subcontainer_id' => '34',
              'process_id' => '186',
            ],
            186 => [
              'subcontainer_id' => '35',
              'process_id' => '187',
            ],
            187 => [
              'subcontainer_id' => '35',
              'process_id' => '188',
            ],
            188 => [
              'subcontainer_id' => '35',
              'process_id' => '189',
            ],
            189 => [
              'subcontainer_id' => '35',
              'process_id' => '190',
            ],
            190 => [
              'subcontainer_id' => '35',
              'process_id' => '191',
            ],
            191 => [
              'subcontainer_id' => '36',
              'process_id' => '192',
            ],
            192 => [
              'subcontainer_id' => '36',
              'process_id' => '193',
            ],
            193 => [
              'subcontainer_id' => '36',
              'process_id' => '194',
            ],
            194 => [
              'subcontainer_id' => '36',
              'process_id' => '195',
            ],
            195 => [
              'subcontainer_id' => '36',
              'process_id' => '196',
            ],
            196 => [
              'subcontainer_id' => '36',
              'process_id' => '197',
            ],
            197 => [
              'subcontainer_id' => '36',
              'process_id' => '198',
            ],
            198 => [
              'subcontainer_id' => '36',
              'process_id' => '199',
            ],
            199 => [
              'subcontainer_id' => '37',
              'process_id' => '200',
            ],
            200 => [
              'subcontainer_id' => '37',
              'process_id' => '201',
            ],
            201 => [
              'subcontainer_id' => '37',
              'process_id' => '202',
            ],
            202 => [
              'subcontainer_id' => '38',
              'process_id' => '203',
            ],
            203 => [
              'subcontainer_id' => '39',
              'process_id' => '204',
            ],
            204 => [
              'subcontainer_id' => '39',
              'process_id' => '205',
            ],
            205 => [
              'subcontainer_id' => '39',
              'process_id' => '206',
            ],
            206 => [
              'subcontainer_id' => '39',
              'process_id' => '207',
            ],
            207 => [
              'subcontainer_id' => '39',
              'process_id' => '208',
            ],
            208 => [
              'subcontainer_id' => '39',
              'process_id' => '209',
            ],
            209 => [
              'subcontainer_id' => '40',
              'process_id' => '210',
            ],
            210 => [
              'subcontainer_id' => '40',
              'process_id' => '211',
            ],
            211 => [
              'subcontainer_id' => '40',
              'process_id' => '212',
            ],
            212 => [
              'subcontainer_id' => '40',
              'process_id' => '213',
            ],
            213 => [
              'subcontainer_id' => '40',
              'process_id' => '214',
            ],
            214 => [
              'subcontainer_id' => '41',
              'process_id' => '215',
            ],
            215 => [
              'subcontainer_id' => '41',
              'process_id' => '216',
            ],
            216 => [
              'subcontainer_id' => '41',
              'process_id' => '217',
            ],
            217 => [
              'subcontainer_id' => '41',
              'process_id' => '218',
            ],
            218 => [
              'subcontainer_id' => '41',
              'process_id' => '219',
            ],
            219 => [
              'subcontainer_id' => '41',
              'process_id' => '220',
            ],
            220 => [
              'subcontainer_id' => '41',
              'process_id' => '221',
            ],
            221 => [
              'subcontainer_id' => '41',
              'process_id' => '222',
            ],
            222 => [
              'subcontainer_id' => '42',
              'process_id' => '223',
            ],
            223 => [
              'subcontainer_id' => '42',
              'process_id' => '224',
            ],
            224 => [
              'subcontainer_id' => '42',
              'process_id' => '225',
            ],
            225 => [
              'subcontainer_id' => '42',
              'process_id' => '226',
            ],
            226 => [
              'subcontainer_id' => '42',
              'process_id' => '227',
            ],
            227 => [
              'subcontainer_id' => '43',
              'process_id' => '228',
            ],
            228 => [
              'subcontainer_id' => '43',
              'process_id' => '229',
            ],
            229 => [
              'subcontainer_id' => '43',
              'process_id' => '230',
            ],
            230 => [
              'subcontainer_id' => '43',
              'process_id' => '231',
            ],
            231 => [
              'subcontainer_id' => '43',
              'process_id' => '232',
            ],
            232 => [
              'subcontainer_id' => '43',
              'process_id' => '233',
            ],
            233 => [
              'subcontainer_id' => '43',
              'process_id' => '234',
            ],
            234 => [
              'subcontainer_id' => '43',
              'process_id' => '235',
            ],
            235 => [
              'subcontainer_id' => '43',
              'process_id' => '236',
            ],
            236 => [
              'subcontainer_id' => '43',
              'process_id' => '237',
            ],
            237 => [
              'subcontainer_id' => '44',
              'process_id' => '238',
            ],
            238 => [
              'subcontainer_id' => '44',
              'process_id' => '239',
            ],
            239 => [
              'subcontainer_id' => '45',
              'process_id' => '240',
            ],
            240 => [
              'subcontainer_id' => '45',
              'process_id' => '241',
            ],
            241 => [
              'subcontainer_id' => '45',
              'process_id' => '242',
            ],
            242 => [
              'subcontainer_id' => '45',
              'process_id' => '243',
            ],
            243 => [
              'subcontainer_id' => '45',
              'process_id' => '244',
            ],
            244 => [
              'subcontainer_id' => '45',
              'process_id' => '245',
            ],
            245 => [
              'subcontainer_id' => '45',
              'process_id' => '246',
            ],
            246 => [
              'subcontainer_id' => '45',
              'process_id' => '247',
            ],
            247 => [
              'subcontainer_id' => '45',
              'process_id' => '248',
            ],
            248 => [
              'subcontainer_id' => '45',
              'process_id' => '249',
            ],
            249 => [
              'subcontainer_id' => '46',
              'process_id' => '250',
            ],
            250 => [
              'subcontainer_id' => '46',
              'process_id' => '251',
            ],
            251 => [
              'subcontainer_id' => '47',
              'process_id' => '252',
            ],
            252 => [
              'subcontainer_id' => '47',
              'process_id' => '253',
            ],
            253 => [
              'subcontainer_id' => '47',
              'process_id' => '254',
            ],
            254 => [
              'subcontainer_id' => '48',
              'process_id' => '255',
            ],
            255 => [
              'subcontainer_id' => '48',
              'process_id' => '256',
            ],
            256 => [
              'subcontainer_id' => '48',
              'process_id' => '257',
            ],
            257 => [
              'subcontainer_id' => '48',
              'process_id' => '258',
            ],
            258 => [
              'subcontainer_id' => '48',
              'process_id' => '259',
            ],
            259 => [
              'subcontainer_id' => '49',
              'process_id' => '260',
            ],
            260 => [
              'subcontainer_id' => '50',
              'process_id' => '261',
            ],
            261 => [
              'subcontainer_id' => '50',
              'process_id' => '262',
            ],
            262 => [
              'subcontainer_id' => '50',
              'process_id' => '263',
            ],
            263 => [
              'subcontainer_id' => '50',
              'process_id' => '264',
            ],
        ];
        SubContainerProcess::insert($data);



    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('subcontainer_process');
    }
}
