import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Link, router } from "@inertiajs/react";

export default function Dashboard(props) {
    const { auth, cards } = props;

    const handleDeletePost = (id) => {
        router.delete(`/cards/${id}`, {
            onBefore: () => confirm("本当に削除しますか？"),
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    名刺一覧
                </h2>
            }
        >
            <Head title="名刺一覧" />

            <div className="p-12">
                <h1>Blog Name</h1>
                <div>
                    {cards.map((card) => (
                        <div key={card.id} className="bg-white m-3">
                            <Link href={`/cards/${card.id}`}>
                                <h2>{card.name}</h2>
                                <p>{card.job}</p>
                            </Link>
                            <button
                                className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md"
                                onClick={() => handleDeletePost(card.id)}
                            >
                                delete
                            </button>
                        </div>
                    ))}
                </div>
                <Link href="/cards/create">Create</Link>
            </div>
        </AuthenticatedLayout>
    );
}
