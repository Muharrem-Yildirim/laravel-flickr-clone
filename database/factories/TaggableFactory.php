<?php

namespace Database\Factories;

use App\Models\Taggable;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaggableFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Taggable::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "tag_id" => rand(0, 10),
            "taggable_id" => rand(0, 10),
            "taggable_type" => "App\Models\Photo"
        ];
    }
}
