<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\AuthController;
use \App\Http\Controllers\ExploreController;
use \App\Http\Controllers\PhotoController;
use App\Http\Controllers\UserController;



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

/* PROTECTED ROUTES */

Route::middleware("auth:sanctum")->group(function () {
    Route::get("me", function (Request $request) {
        return $request->user();
    });
    Route::get("me/photos", [UserController::class, "getMyPhotos"]);

    Route::get("refresh", [AuthController::class, "refresh"]);
    Route::get("logout", [AuthController::class, "logout"]);

    Route::post("photo", [PhotoController::class, "upload"]);
});


/* UNPROTECTED ROUTES */

Route::post("login", [AuthController::class, "login"]);
Route::post("register", [AuthController::class, "register"]);

Route::get("explore", [ExploreController::class, "all"]);
Route::get("explore/{tag_id}", [ExploreController::class, "getById"])->where("tag_id", "[0-9]+");
Route::get("explore/{tag_name}", [ExploreController::class, "getByName"]);


Route::get("photo/{photo_id}", [PhotoController::class, "getById"])->where("photo_id", "[0-9]+");

Route::get("user/{user_id}/photos", [UserController::class, "getPhotosById"])->where("user_id", "[0-9]+");
