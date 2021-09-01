<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $messages = \App\Models\Message::all();
    return inertia('home', ['messages' => $messages]);
});

Route::get('about', function () {
    return inertia('about');
});


Route::post('message', function (\Illuminate\Http\Request $request) {

    // Validation
    $validated = $request->validate([
        'text' => 'required|min:10'
    ]);


    // Save Record
    \App\Models\Message::create($validated);

    return redirect('/');
});

