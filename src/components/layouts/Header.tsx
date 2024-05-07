import { Link } from "react-router-dom";
import logo from "/images/logo.svg";
import profile from "/images/profile.png";
import { useState } from "react";
import MenuSvg from "../utils/svg/MenuSvg";

const Header = () => {
  const [isLogin] = useState<boolean>(true);

  return (
    <header className="bg-white sticky top-0 w-full py-5 shadow-md">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="items-center gap-6 hidden lg:flex">
            <img src={logo} alt="logo" className="w-24" />
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="w-80 py-2.5 ps-10 text-sm text-gray-900 rounded-full bg-[#F7F8FA] outline-none focus:border focus:border-gray-400"
                placeholder="Search for a service or venue"
              />
            </div>
          </div>
          <div className="flex flex-row-reverse lg:flex-row justify-between items-center lg:gap-10 w-full lg:w-auto">
            {!isLogin ? (
              <div className="flex gap-10">
                <Link to="/login" className="font-bold">
                  Login
                </Link>
                <Link to="/register" className="font-bold">
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="w-14 h-14">
                <img src={profile} alt="profile" className="w-full" />
              </div>
            )}

            <button type="button">
              <MenuSvg />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
