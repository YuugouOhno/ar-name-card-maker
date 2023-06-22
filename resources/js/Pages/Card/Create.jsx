import React, { useState } from "react";
import { Link, useForm } from "@inertiajs/react";

const Create = (props) => {
    const { card } = props;

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
        ar_text: ""
    });

    const handleSendPosts = (e) => {
        e.preventDefault();
        post("/cards");
    };

    const [page, setPage] = useState(0);
    const [bg_image, setBg_image] = useState();
    const [bg_color, setBg_color] = useState();

    const handleSetBg = (type,value) => {
        if (type == "image") {
            setBg_image("./d-" + value + ".png");
            setBg_color("")
        } else if (type == "color") {
            setBg_color(value)
            setBg_image("");
        }
    }


    return (
        <div className="bg-gray-200 text-gray-800">
            {page == 0 && (
                <div className="bg-[#B4FFF2]">
                    <div class="h-screen flex items-center justify-center lerative flex-col">
                        <img src="./top.png" className="h-2/3" />
                        <div className="flex">
                            <a
                                onClick={() => {
                                    setPage(1);
                                }}
                                href="#"
                                class="gradient1 mx-20"
                            >
                                始める
                            </a>
                        </div>
                    </div>
                </div>
            )}
            {page >= 1 && (
                <div className="flex w-full flex-col px-12 bg-gray-200 text-gray-800">
                    <div className="bg-[#B4FFF2] h-[80px] w-full flex justify-between items-center fixed left-0 px-12 z-50">
                        <img src="./header.png" className="h-full" />
                    </div>

                    <div className="flex flex-col lg:flex-row py-12 justify-center mt-[80px]">
                        <div className="flex-1 flex items-center justify-center w-1/2">
                            <div className="xl:flex">
                                <div className="mr-3">
                                    <h2>デザイン</h2>
                                    <div className="flex">
                                        <img
                                            src="./d-1.png"
                                            className="w-[30%] m-2"
                                            onClick={() =>
                                                handleSetBg("image","1")
                                            }
                                        />
                                        <img
                                            src="./d-2.png"
                                            className="w-[30%] m-2"
                                            onClick={() =>
                                                handleSetBg("image","2")
                                            }
                                        />
                                        <img
                                            src="./d-3.png"
                                            className="w-[30%] m-2"
                                            onClick={() =>
                                                handleSetBg("image","3")
                                            }
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            src="./d-4.png"
                                            className="w-[30%] m-2"
                                            onClick={() =>
                                                handleSetBg("image","4")
                                            }
                                        />
                                        <img
                                            src="./d-5.png"
                                            className="w-[30%] m-2"
                                            onClick={() =>
                                                handleSetBg("image","5")
                                            }
                                        />
                                        <input
                                            type="color"
                                            className="w-[30%] h-auto m-2"
                                            onChange={(e) =>
                                                handleSetBg("color",e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <form
                                    onSubmit={handleSendPosts}
                                    enctype="multipart/form-data"
                                >
                                    <div className="flex mb-4">
                                        <div className="mr-4">
                                            <h2>名前</h2>
                                            <input
                                                type="text"
                                                placeholder="名刺太郎"
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>

                                        <div>
                                            <h2>名前（ローマ字）</h2>
                                            <input
                                                type="text"
                                                placeholder="TarouMeishi"
                                                onChange={(e) =>
                                                    setData(
                                                        "en_name",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="flex mb-4">
                                        <div className="mr-4">
                                            <h2>職</h2>
                                            <input
                                                type="text"
                                                placeholder="エンジニア"
                                                onChange={(e) =>
                                                    setData(
                                                        "job",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>

                                        <div>
                                            <h2>所属</h2>
                                            <input
                                                type="text"
                                                placeholder="OO大学"
                                                onChange={(e) =>
                                                    setData(
                                                        "affiliation",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="flex mb-4">
                                        <div className="mr-4">
                                            <h2>Twitter</h2>
                                            <input
                                                type="text"
                                                placeholder="twitter_url"
                                                onChange={(e) =>
                                                    setData(
                                                        "twitter",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="mr-4">
                                            <h2>Github</h2>
                                            <input
                                                type="text"
                                                placeholder="github_url"
                                                onChange={(e) =>
                                                    setData(
                                                        "github",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="mr-4 mb-4">
                                        <h2>Portfolio</h2>
                                        <input
                                            type="text"
                                            placeholder="portfolio_url"
                                            onChange={(e) =>
                                                setData(
                                                    "portfolio",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="mr-4 mb-4">
                                        <h2>
                                            ar名刺に入れる文章（3~4行を推奨）＊英数字のみ
                                        </h2>
                                        <textarea
                                            placeholder="私の魅力について"
                                            onChange={(e) =>
                                                setData(
                                                    "ar_text",
                                                    e.target.value
                                                )
                                            }
                                        ></textarea>
                                    </div>
                                    <div class="image mb-4">
                                        <h2>ar名刺のアイコン画像(1:1)</h2>
                                        <input
                                            type="file"
                                            name="ar_icon_image"
                                            onChange={(e) =>
                                                setData(
                                                    "ar_icon_image",
                                                    e.target.files
                                                )
                                            }
                                        />
                                    </div>
                                    <div class="image mb-4">
                                        <h2>ar名刺に入れる画像(16:9)</h2>
                                        <input
                                            type="file"
                                            name="ar_content_image"
                                            onChange={(e) =>
                                                setData(
                                                    "ar_content_image",
                                                    e.target.files
                                                )
                                            }
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="gradient1 mx-20"
                                    >
                                        作成
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="flex lg:flex-col overflow-y-auto">
                            <div className="m-4 w-[455px] h-[275px] bg-white flex flex-col relative">
                                {bg_image && (
                                    <img
                                        src={bg_image}
                                        className="z-10 absolute w-[455px] h-[275px]"
                                    />
                                )}
                                <div className="z-20 p-10 relative">
                                    <div
                                        id="affiliation"
                                        className="text-xl font-bold text-right"
                                    >
                                        {card
                                            ? card.affiliation
                                            : data.affiliation}
                                    </div>
                                    <div id="job" className="mb-2 text-right">
                                        {card ? card.job : data.job}
                                    </div>
                                    <div
                                        id="name"
                                        className="text-5xl text-right"
                                    >
                                        {card ? data.name : data.name}
                                    </div>
                                    <div
                                        id="en_name"
                                        className="mb-2 tracking-widest text-xl text-right"
                                    >
                                        {card ? card.en_name : data.en_name}
                                    </div>
                                    <div className="text-right">
                                        twitter:
                                        {card ? card.twitter : data.twitter}
                                    </div>
                                    <div className="text-right">
                                        github:
                                        {card ? card.github : data.github}
                                    </div>
                                    <div className="text-right">
                                        portfolio:
                                        {card ? card.portfolio : data.portfolio}
                                    </div>
                                </div>
                            </div>
                            <div className="w-[455px] h-[275px] bg-white m-4 flex justify-center items-center">
                                {bg_image && (
                                    <img
                                        src={bg_image}
                                        className="z-10 absolute w-[455px] h-[275px]"
                                    />
                                )}
                                {card && (
                                    <div className="z-20 p-10 relative flex">
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
                    </div>
                </div>
            )}
        </div>
    );
};

export default Create;
