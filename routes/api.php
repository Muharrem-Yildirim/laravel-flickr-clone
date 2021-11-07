<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\AuthController;
use \App\Http\Controllers\ExploreController;
use \App\Http\Controllers\PhotoController;


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
    Route::get("user", function (Request $request) {
        return $request->user();
    });
    Route::get("refresh", [AuthController::class, "refresh"]);
    Route::post("photo", [PhotoController::class, "upload"]);
});


/* UNPROTECTED ROUTES */
Route::post("login", [AuthController::class, "login"]);
Route::post("register", [AuthController::class, "register"]);

Route::get("explore", [ExploreController::class, "all"]);
Route::get("explore/{tag_id}", [ExploreController::class, "getByTagId"])->where("tag_id", "[0-9]+");
Route::get("explore/{tag_name}", [ExploreController::class, "getByTagName"]);
