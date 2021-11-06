<?php

namespace App\Http\Controllers;

use App\Models\Photo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;


class PhotoController extends Controller
{
    //
    public function upload(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "images.*" => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:5000',
            "images" => 'max:1'
        ]);


        if ($validator->fails()) {
            return response()->json(["error" => $validator->errors()->first()], 400);
        }


        if ($request->hasfile('images')) {
            $images = $request->file("images");


            foreach ($images as $file) {
                $hashedName = hash_file('md5', $file->path());
                $timestamp = microtime(true) * 1000000;

                $newFilename = $hashedName . $timestamp . '.' . $file->getClientOriginalExtension();

                Storage::disk('public')->put("uploads/photos/" . $newFilename,  file_get_contents($file));


                $photo = new Photo();
                $photo->url = $newFilename;
                $photo->save();
            }
        }
    }
}
