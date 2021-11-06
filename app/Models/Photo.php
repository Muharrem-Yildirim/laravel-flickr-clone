<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Factories\Factory;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    use HasFactory;

    protected $fillable = [
        'url',
    ];

    protected $casts = [];

    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }
}
