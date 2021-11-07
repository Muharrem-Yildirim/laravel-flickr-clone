<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Photo;

class UserController extends Controller
{
    public function getPhotosById($user_id)
    {
        return response()->json(Photo::where(["user_id" => $user_id])->get());
    }
}
