import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";

const Show = (props) => {
    const { auth, card } = props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    名刺一覧
                </h2>
            }
        >
            <div className="p-12">
                <div className="bg-white m-3">
                    <h1>{card.name}</h1>
                    <p>{card.job}</p>
                </div>

                <div>
                    <Link href="/cards">戻る</Link>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;