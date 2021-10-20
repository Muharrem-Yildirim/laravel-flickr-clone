<?php

namespace Database\Seeders;

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
        // \App\Models\User::factory(10)->create();
        \App\Models\Photo::factory(50)->create();
        \App\Models\Tag::factory(50)->create();
        \App\Models\Taggable::factory(50)->create();


        \App\Models\Tag::where('id', 1)->update(["name" => "environment"]);
        \App\Models\Tag::where('id', 2)->update(["name" => "city"]);
        \App\Models\Tag::where('id', 3)->update(["name" => "animal"]);
    }
}
