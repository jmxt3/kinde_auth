import Link from "next/link";
import Image from "next/image";
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Header() {

    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <div className="bg-gray-800 text-white py-4 px-5 border-b border-black/10 flex items-center justify-between">
            <div className="text-2xl font-bold">
                <Link href="/" className="text-white hover:text-gray-300">
                    <Image
                        src="/next.svg"
                        alt="Logo"
                        width={80}
                        height={40}
                        className="dark:invert inline-block mr-2"
                        priority
                    />
                </Link>
            </div>
            <ul className="flex space-x-8">
                <li>
                    <Link href="/posts" className="text-white hover:text-gray-300">
                        Posts
                    </Link>
                </li>
                {user && (
                    <li>
                        <LogoutLink className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300">
                            Logout
                        </LogoutLink>
                    </li>
                )}
            </ul>
        </div >
    );
}
