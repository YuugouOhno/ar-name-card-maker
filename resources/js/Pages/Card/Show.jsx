import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";

const Show = (props) => {
    const { card } = props;
    return (
            <div className="p-12">
                <div className="bg-white m-3">
                    <h1>{card.name}</h1>
                    <p>{card.job}</p>
                </div>
                <img src={ card.ar_qr_image } alt="画像が読み込めません。"/>
                <p>{card.ar_qr_image}</p>
                <div>
                    <Link href="/">戻る</Link>
                </div>
            </div>
    );
};

export default Show;
