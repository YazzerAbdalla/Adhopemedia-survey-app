"use client";
import { useState } from "react";
import Link from "next/link";
import { BsList } from "react-icons/bs";
interface navProps {
  navTabs: string;
  setNavTabs: React.Dispatch<React.SetStateAction<string>>;
}
export default function Nav({ navTabs, setNavTabs }: navProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" flex flex-col lg:flex-row  w-full  py-8 lg:px-28 lg:py-4 px-0 ">
      <div className="flex items-center justify-between px-4 lg:px-0">
        <h1 className="font-bold text-white text-2xl">LOGO</h1>
        <button
          className="lg:hidden focus:outline-none w-8 h-8 overflow-hidden flex items-center justify-center transition-all duration-300 ease-in-out  text-white"
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
          className={`flex flex-col lg:py-0 lg:px-0 font-bold text-lg lg:font-normal lg:text-base py-5  px-4 lg:flex-row  lg:space-x-5 mt-3 w-full lg:justify-center text-white lg:bg-transparent`}
          style={{
            background:
              "linear-gradient(110.43deg, #180437 7.89%, #450B9D 89.43%)",
          }}
        >
          <div
            onClick={() => {
              setIsMenuOpen(false);
              setNavTabs("home");
            }}
            className={`cursor-pointer ${
              navTabs === "home" && "text-[#b064fe]"
            } `}
          >
            Home
          </div>
          <div
            onClick={() => {
              setIsMenuOpen(false);
              setNavTabs("activity");
            }}
            className={`cursor-pointer ${
              navTabs.includes("activity") && "text-[#b064fe]"
            } `}
          >
            Activity
          </div>
          <div
            onClick={() => {
              setIsMenuOpen(false);
              setNavTabs("terms-of-service");
            }}
            className={`cursor-pointer ${
              navTabs.includes("terms-of-service") && "text-[#b064fe]"
            } `}
          >
            Terms of Service
          </div>
        </div>
      </div>
    </div>
  );
}
