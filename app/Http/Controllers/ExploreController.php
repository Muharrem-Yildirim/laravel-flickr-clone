<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Photo;
use App\Models\Tag;
use App\Models\Taggable;

class ExploreController extends Controller
{
    public function all(Request $request)
    {
        $photos = Photo::with("tags")->inRandomOrder()->get()->take(20);

        return response()->json($photos);
    }

    public function getByTagId(Request $request, $tag_id)
    {
        $photos = Tag::with("photos.tags")->where("id", $tag_id)->get()->first();

        return response()->json(
            $photos == null ? array() : $photos["photos"]
        );
    }

    public function getByTagName(Request $request, $tag_name)
    {
        $photos = Tag::with("photos.tags")->where("name", $tag_name)->get()->first();

        return response()->json(
            $photos == null ? array() : $photos["photos"]
        );
    }
}
