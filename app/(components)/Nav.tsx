"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsList } from "react-icons/bs";

export default function Nav() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" flex flex-col lg:flex-row  w-full  py-8 lg:px-28 lg:py-4 px-0 ">
      <div className="flex items-center justify-between px-4 lg:px-0">
        <h1 className="font-bold text-white text-2xl">LOGO</h1>
        <button
          className="block lg:hidden focus:outline-none w-8 h-8 overflow-hidden flex items-center justify-center transition-all duration-300 ease-in-out  text-white"
          onClick={toggleMenu}
        >
          <BsList
            className={`text-white transition-all duration-300 ease-in-out block h-6 w-6 ${
              isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
            }`}
          />
        </button>
      </div>

      <div
        className={`lg:grow ${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:w-auto`}
      >
        <div
          className={`flex flex-col lg:py-0 lg:px-0 font-bold text-lg lg:font-normal lg:text-base py-2 px-4  lg:flex-row  lg:space-x-5 w-full lg:justify-center  bg-gradient-to-r from-[#180437] to-[#410b95] text-white lg:bg-transparent 
        `}
        >
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
