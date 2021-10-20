<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Photo;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('daily-photos', function (Request $request) {
    sleep(0.1);

    $photos = Photo::all()->random(0);

    // foreach ($photos as $photo) {
    //     list($width, $height, $type, $attr) = getimagesize($photo["url"]);

    //     $photo["size"] = [$width, $height];
    // }

    return response()->json($photos);
});


Route::get('daily-photos/{categoryId}', function (Request $request, $categoryId) {
    sleep(0.1);
    // $photos = Photo::where("category_id", $categoryId)->limit(15)->get();

    // foreach ($photos as $photo) {
    //     echo getimagesize($photo["url"]);
    // }

    return response()->json(Photo::where("category_id", $categoryId)->limit(15)->get());
});
