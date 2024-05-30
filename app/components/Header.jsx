"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [user, setUser] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== undefined) {
      if (localStorage.getItem("user")) {
        setUser(() => true);
      }
    }
  }, []);
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl">Learnfinity</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-white cursor-pointer">
            Home
          </Link>
          <Link href={"#course"} className="mr-5 hover:text-white cursor-pointer">
            Course
          </Link>
          <Link href={"/"} className="mr-5 hover:text-white cursor-pointer">
            About Us
          </Link>
          <Link href={"/"} className="mr-5 hover:text-white cursor-pointer">
            Contact Us
          </Link>
        </nav>
        {user ? (
          <button
            onClick={() => {
              localStorage.removeItem("user");
              setUser(() => false);
              router.refresh();
            }}
            className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-800 rounded text-white text-base mt-4 md:mt-0"
          >
            Log out
          </button>
        ) : (
          <Link href={"/login"}>
            <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-800 rounded text-white text-base mt-4 md:mt-0">
              Login
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
