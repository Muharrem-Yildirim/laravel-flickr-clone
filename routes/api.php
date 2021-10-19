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
    return response()->json(Photo::all()->take(10));
});


Route::get('daily-photos/{categoryId}', function (Request $request, $categoryId) {
    sleep(0.1);
    return response()->json(Photo::where("category_id", $categoryId)->limit(15)->get());
});
