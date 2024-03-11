"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NewNav() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" flex flex-col lg:flex-row  w-full  py-4 lg:px-28 lg:py-4 px-0 ">
      <div className="flex items-center justify-between px-4 lg:px-0">
        <h1 className="font-bold text-white text-2xl">LOGO</h1>
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`lg:grow ${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:w-auto`}
      >
        <div className="flex flex-col lg:py-0 lg:px-0 font-bold text-lg lg:font-normal lg:text-base py-2 px-4  lg:flex-row  lg:space-x-5 w-full lg:justify-center  bg-gradient-to-r from-[#180437] to-[#410b95] text-white lg:bg-transparent">
          <Link
            onClick={() => setIsMenuOpen(false)}
            className={`${path === "/" && "text-[#b064fe]"} `}
            href={"/"}
            passHref
          >
            Home
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className={`${path.includes("activity") && "text-[#b064fe]"} `}
            href={"/activity"}
            passHref
          >
            Activity
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className={`${
              path.includes("terms-of-service") && "text-[#b064fe]"
            } `}
            href={"/terms-of-service"}
            passHref
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}
