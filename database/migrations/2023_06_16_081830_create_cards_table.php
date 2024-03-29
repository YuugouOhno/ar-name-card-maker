<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cards', function (Blueprint $table) {
            $table->id();
            $table->string('name', 200);
            $table->string('en_name', 200);
            $table->string('affiliation', 200);
            $table->string('job', 200);
            $table->string('twitter', 200)->nullable();
            $table->string('github', 200)->nullable();
            $table->string('portfolio', 200)->nullable();

            $table->string('ar_icon_image', 200)->nullable();
            $table->string('ar_content_image', 200)->nullable();
            $table->string('ar_text', 200);
            $table->string('ar_qr_image', 200)->nullable();
            $table->string('link_url', 200)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cards');
    }
};
