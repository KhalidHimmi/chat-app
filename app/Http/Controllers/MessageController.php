<?php

namespace App\Http\Controllers;

use App\Events\sentMessage;
use Illuminate\Http\Request;
use App\Models\Message;
// use Illuminate\Support\Facades\Broadcast;
// use Illuminate\Routing\Controller;


class MessageController extends Controller
{
    public function index()
    {
        $messages = Message::with(['user'])->get();
        // sentMessage::dispatch($messages);
        return response()->json($messages);
    }

    public function store(Request $request)
    {        
        $message = user()->messages()->create(['body' => $request->body]);
        // event(new sentMessage($this->message));
        broadcast(new sentMessage($message))->toOthers();    
        return response()->json($message);
    }
}
