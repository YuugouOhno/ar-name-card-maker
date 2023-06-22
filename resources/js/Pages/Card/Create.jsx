import React from "react";
import { Link, useForm } from "@inertiajs/react";

const Create = () => {
    const { data, setData, post } = useForm({
        name: "",
        job: "",
        ar_name: "",
        ar_icon_image: "",
        ar_content_image: "",
        ar_text: "",
    });

    const handleSendPosts = (e) => {
        e.preventDefault();
        post("/cards");
    };

    return (
            <div className="p-12">
                <form onSubmit={handleSendPosts} enctype="multipart/form-data">
                    <div>
                        <h2>名前</h2>
                        <input
                            type="text"
                            placeholder="名刺太郎"
                            onChange={(e) => setData("name", e.target.value)}
                        />
                    </div>

                    <div>
                        <h2>名前（英語）</h2>
                        <input
                            type="text"
                            placeholder="TarouMeishi"
                            onChange={(e) => setData("ar_name", e.target.value)}
                        />
                    </div>

                    <div>
                        <h2>職</h2>
                        <input
                            type="text"
                            placeholder="エンジニア"
                            onChange={(e) => setData("job", e.target.value)}
                        />
                    </div>

                    <div>
                        <h2>ar名刺に入れる文章（3~4行を推奨）</h2>
                        <textarea
                            placeholder="私の魅力について"
                            onChange={(e) => setData("ar_text", e.target.value)}
                        ></textarea>
                    </div>

                    <div class="image">
                        <h2>アイコン画像</h2>
                        <input
                            type="file"
                            name="ar_icon_image"
                            onChange={(e) =>
                                setData("ar_icon_image", e.target.files)
                            }
                        />
                    </div>
                    <div class="image">
                    <h2>ar名刺に入れる画像</h2>
                        <input type="file" name="ar_content_image" onChange={(e) => setData("ar_content_image", e.target.files)}/>
                    </div>

                    <button
                        type="submit"
                        className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md"
                    >
                        create
                    </button>
                </form>

                <Link href="/cards">戻る</Link>
            </div>
    );
};

export default Create;
