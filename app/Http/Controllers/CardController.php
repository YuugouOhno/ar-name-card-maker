<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Card;

class CardController extends Controller
{
    public function index(Card $card)
    {
        return Inertia::render("Card/Index", ["cards" => $card->get()]);
    }

    public function create()
    {
        return Inertia::render("Card/Create");
    }

    public function store(Request $request, Card $card)
    {
        $input = $request->all();
        $card->fill($input)->save();
        $card->createQRcode($card);
        return redirect("/cards/" . $card->id);
    }

    public function show(Card $card)
    {
        return Inertia::render("Card/Show", ["card" => $card]);
    }

    public function camera(Card $card)
    {
        return view("camera", ["card" => $card]);
    }

    public function delete(Card $card){
        $card->delete();
        return redirect("/cards");
    }
}
