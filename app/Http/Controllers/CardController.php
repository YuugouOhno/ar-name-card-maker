<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Card;

use SimpleSoftwareIO\QrCode\Facades\QrCode;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class CardController extends Controller
{
    public function index(Card $card)
    {
        return Inertia::render("Card/Index", ["cards" => $card->get()]);
    }

    public function create(Request $request)
    {
        if ($request) {
            $card = $request->session()->get('card');
        };
        return Inertia::render("Card/Create", ["card" => $card]);
    }

    public function store(Request $request, Card $card)
    {
        $input = $request->all();
        $input["ar_icon_image"] = Cloudinary::upload($request->file('ar_icon_image')[0]->getrealpath())->getSecurePath();
        $input["ar_content_image"] = Cloudinary::upload($request->file('ar_content_image')[0]->getrealpath())->getSecurePath();

        $card->fill($input)->save();
        
        $url = 'https://ar-name-card-maker-d08633638f44.herokuapp.com/camera/' . strval($card["id"]); // QRコードに変換するURL

        $qrCode = QrCode::format('png')->size(200)->generate($url);
        $tempFilePath = 'app/temp/qr-code.png'; // 一時ファイルとして保存するパス

        file_put_contents($tempFilePath, $qrCode);

        $card["ar_qr_image"] = Cloudinary::upload($tempFilePath)->getSecurePath();
        $card->save();
        
        unlink($tempFilePath);

        $request->session()->put('card', $card);
        return redirect()->route("create");
    }

    public function show(Card $card)
    {
        return Inertia::render("Card/Show", ["card" => $card]);
    }

    public function camera(Card $card)
    {
        return view("camera", ["card" => $card]);
    }

    public function delete(Card $card)
    {
        $card->delete();
        return redirect("/cards");
    }
}
