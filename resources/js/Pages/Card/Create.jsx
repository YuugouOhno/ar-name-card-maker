import React from "react";
import { Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Create = (props) => {
    const { auth } = props;

    const { data, setData, post } = useForm({
        name: "",
        job: "",
    });

    const handleSendPosts = (e) => {
        e.preventDefault();
        post("/cards");
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create
                </h2>
            }
        >
            <div className="p-12">
                <form onSubmit={handleSendPosts}>
                    <div>
                        <h2>name</h2>
                        <input
                            type="text"
                            placeholder="タイトル"
                            onChange={(e) => setData("name", e.target.value)}
                        />
                    </div>

                    <div>
                        <h2>job</h2>
                        <textarea
                            placeholder="今日も1日お疲れさまでした。"
                            onChange={(e) => setData("job", e.target.value)}
                        ></textarea>
                    </div>

                    <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">create</button>
                </form>

                <Link href="/cards">戻る</Link>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
