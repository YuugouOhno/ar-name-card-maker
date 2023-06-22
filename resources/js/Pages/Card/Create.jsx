import React from "react";
import { Link, useForm } from "@inertiajs/react";

const Create = (props) => {
    const { card } = props;
    console.log("test", card);

    const { data, setData, post } = useForm({
        name: "",
        en_name: "",
        job: "",
        affiliation: "",
        twitter: "",
        github: "",
        portfolio: "",
        link_url: "",
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
                        onChange={(e) => setData("en_name", e.target.value)}
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
                    <h2>所属</h2>
                    <input
                        type="text"
                        placeholder="OO大学"
                        onChange={(e) => setData("affiliation", e.target.value)}
                    />
                </div>

                <div>
                    <h2>Twitter</h2>
                    <input
                        type="text"
                        placeholder="twitter_url"
                        onChange={(e) => setData("twitter", e.target.value)}
                    />
                </div>

                <div>
                    <h2>Github</h2>
                    <input
                        type="text"
                        placeholder="github_url"
                        onChange={(e) => setData("github", e.target.value)}
                    />
                </div>

                <div>
                    <h2>Portfolio</h2>
                    <input
                        type="text"
                        placeholder="portfolio_url"
                        onChange={(e) => setData("portfolio", e.target.value)}
                    />
                </div>

                <div>
                    <h2>AR名刺から遷移するURL</h2>
                    <input
                        type="text"
                        placeholder="link"
                        onChange={(e) => setData("link_url", e.target.value)}
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
                    <h2>ar名刺のアイコン画像</h2>
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
                    <input
                        type="file"
                        name="ar_content_image"
                        onChange={(e) =>
                            setData("ar_content_image", e.target.files)
                        }
                    />
                </div>

                <button
                    type="submit"
                    className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md"
                >
                    create
                </button>
            </form>

            <div className="flex flex-col">
                <div className="m-1 w-[455px] h-[275px] bg-white p-10 flex flex-col">
                    <div
                        id="affiliation"
                        className="text-xl font-bold text-right"
                    >
                        {card ? card.affiliation: data.affiliation}
                    </div>
                    <div id="job" className="mb-2 text-right">
                        {card ? card.job: data.job}
                    </div>
                    <div id="name" className="text-5xl text-right">
                        {card ? card.name: data.name}
                    </div>
                    <div
                        id="en_name"
                        className="mb-2 tracking-widest text-xl text-right"
                    >
                        {card ? card.en_name: data.en_name}
                    </div>
                    <div className="text-right">twitter:{card ? card.twitter: data.twitter}</div>
                    <div className="text-right">github:{card ? card.github: data.github}</div>
                    <div className="text-right">portfolio:{card ? card.portfolio: data.portfolio}</div>
                </div>
                {card && (
                    <div className="w-[455px] h-[275px] bg-white m-1 flex justify-center items-center">
                        <img
                            src={card.ar_qr_image}
                            className="mr-4 w-[180px] h-[180px]"
                        />
                        <img
                            src="./card/pattern.png"
                            className="w-[180px] h-[180px]"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Create;
