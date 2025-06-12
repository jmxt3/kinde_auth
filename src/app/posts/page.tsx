import Link from "next/link";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export default async function PostsPage() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60, // Revalidate every 60 seconds
        },
    });
    const posts: Post[] = await response.json();
    // console.log(posts); // Consider removing for production
    return (
        <div className="text-center pt-5" >
            <h1 className="text-3xl capitalize font-bold mb-5">
                Posts Page
            </h1>
            <ul className="list-disc list-inside text-left max-w-2xl mx-auto">
                {posts.map((post) => (
                    <li key={post.id} className="mb-2">
                        <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div >
    );
}