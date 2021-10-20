<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\AuthController;
use App\Models\Photo;
use App\Models\Tag;
use App\Models\Taggable;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post("/token", [AuthController::class, "token"]);
Route::post("/register", [AuthController::class, "register"]);
Route::middleware('auth:sanctum')->get("/user", [AuthController::class, 'profile']);
Route::middleware('auth:sanctum')->get("/refresh", [AuthController::class, 'refresh']);

Route::get('daily-photos', function (Request $request) {
    sleep(0.1);

    $photos = Photo::with("tags")->get()->random(5);

    return response()->json($photos);
});






Route::get('daily-photos/{tag_id}', function (Request $request, $tag_id) {
    sleep(0.1);

    $photos = Tag::with("photos.tags")->where("id", $tag_id)->get()->first();

    return response()->json(
        $photos == null ? array() : $photos["photos"]
    );
})->where('tag_id', '[0-9]+');


Route::get('daily-photos/{tag_name}', function (Request $request, $tag_name) {
    sleep(0.1);


    $photos = Tag::with("photos.tags")->where("name", $tag_name)->get()->first();

    return response()->json(
        $photos == null ? array() : $photos["photos"]
    );
});
