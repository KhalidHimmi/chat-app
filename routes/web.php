<?php

use App\Events\sentMessage;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;



Route::get('/', function () {
    return view('welcome');
});


//Route::get('/chat', 'ChatController@index')->name('chat');
Route::get('/chat', [App\Http\Controllers\ChatController::class, 'index'])->name('chat');


Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
//Route::get('/message','MessageController@index')->name('message');
Route::get('/message',[App\Http\Controllers\MessageController::class, 'index'])->name('message');

Route::post('/message', [App\Http\Controllers\MessageController::class, 'store'])->name('message.store');