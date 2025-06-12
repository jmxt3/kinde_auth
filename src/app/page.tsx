import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Home() {

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="text-center pt-5">
      <h1 className="text-3xl capitalize font-bold mb-5">
        Welcome to my blog
      </h1>
      <p className="text-[16px] text-gray-600 mb-8">
        This is a Next.js Blog.
      </p>
      {user ? (
        <LogoutLink className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300 mb-5">
          Logout
        </LogoutLink>
      ) : (
        <div>
          <RegisterLink
            postLoginRedirectURL="/posts"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 mr-5"
          >
            Register
          </RegisterLink>
          <LoginLink
            postLoginRedirectURL="/posts"
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-300"
          >
            Login
          </LoginLink>
        </div>
      )}
    </div>
  );
}
