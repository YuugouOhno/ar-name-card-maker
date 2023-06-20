<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Cloudinary;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class Card extends Model
{
    use HasFactory;

    // fillableを追記
    protected $fillable = [
        "name",
        "job",
        "ar_name",
        "ar_icon_image",
        "ar_content_image",
        "ar_text",
        "ar_qr_image"
    ];

    // public function storeImage($request_image)
    // {
    //     $image_url = Cloudinary::upload($request_image)->getSecurePath();
    //     $image = Letter::create([
    //         "id" => str()->uuid(),
    //         "image_url" => $image_url
    //     ]);
    //     if(is_file($request_image)){
    //         unlink($request_image);
    //     }
    //     return $image;
    // }

    public function createQRcode($image)
    {
        QrCode::generate("http://localhost/camera/".strval($image->id), '../public/QR/' . strval($image->id) . '.svg');
    }
}
