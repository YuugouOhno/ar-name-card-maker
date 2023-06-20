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

    public function create()
    {
        return Inertia::render("Card/Create");
    }

    public function store(Request $request, Card $card)
    {
        $input = $request->all();
        $ar_icon_image_url = Cloudinary::upload($request->file('ar_icon_image')[0]->getrealpath())->getSecurePath();
        $ar_content_image_url = Cloudinary::upload($request->file('ar_content_image')[0]->getrealpath())->getSecurePath();
        dd($ar_icon_image_url,$ar_content_image_url);  //画像のURLを画面に表示
        $card->fill($input)->save();

        $url = 'https://readouble.com/laravel/10.x/ja/installation.html'; // QRコードに変換するURL

        $qrCode = QrCode::format('png')->size(200)->generate($url);
        $tempFilePath = 'app/temp/qr-code.png'; // 一時ファイルとして保存するパス

        file_put_contents($tempFilePath, $qrCode);

        $cloudinaryResponse = Cloudinary::upload($tempFilePath)->getSecurePath();

        unlink($tempFilePath);

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

    public function delete(Card $card)
    {
        $card->delete();
        return redirect("/cards");
    }
}
