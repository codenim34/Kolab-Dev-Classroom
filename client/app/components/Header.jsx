import Image from "next/image";
import Link from "next/link";
import { UserButton, auth } from "@clerk/nextjs";

// Import the logo image
import KolabLogo from "../../public/kolab-logo-white.png";

const Header = async ({ username }) => {
  const { userId } = auth();

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/">
          <Image src={KolabLogo} alt="Kolab Logo" width={80} height={40} />{" "}
          {/* Adjust size as needed */}
        </Link>
      </div>

      {/* Navigation Links and User Button */}
      <div className="flex items-center">
        {!userId && (
          <>
            <Link href="sign-in" className="text-white hover:opacity-75 mr-6">
              Login
            </Link>
            <Link
              href="sign-up"
              className="bg-orange text-white py-2 px-4 rounded hover:bg-orange-700"
            >
              Sign up
            </Link>
          </>
        )}
        {userId && (
          <Link href="profile" className="text-gray-300 hover:text-white mr-4">
            Profile
          </Link>
        )}
        <div className="ml-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
