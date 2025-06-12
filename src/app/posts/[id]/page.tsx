import { redirect } from "next/navigation";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default async function PostsPage({ params }: { params: { id: string } }) {

    const { id } = await params;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!response.ok) {
        redirect("/posts"); // Redirect if the post is not found
    }

    const post: Post = await response.json();

    return (
        <div className="text-center pt-5">
            <h1 className="text-3xl capitalize font-bold mb-5">{post.title}</h1>
            <div className="text-left max-w-2xl mx-auto bg-gray-100 p-5 rounded-lg shadow-md">
                <p>{post.body}</p>
            </div>
        </div>
    );
}