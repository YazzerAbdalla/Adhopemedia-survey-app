"use client";
import { useEffect, useState } from "react";
import { BsList } from "react-icons/bs";
import LgSearchBar from "./LgSearchBar";
import Image from "next/image";
import Link from "next/link";

interface navProps {
  navTabs: string;
  setNavTabs: React.Dispatch<React.SetStateAction<string>>;
}

export default function Nav({ navTabs, setNavTabs }: navProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed bg-[#1D053B] bg-opacity-55 top-0 z-[1000] flex flex-col lg:flex-row w-full py-7 lg:px-28 lg:py-4 px-0">
      {/* Logo section */}
      <div className="flex items-center lg:justify-between justify-center lg:px-0">
        <Link href="/" className="">
          <Image
            src={"/kero1.svg"}
            alt=""
            width={70}
            height={0}
            onClick={() => {
              setNavTabs("home");
            }}
          />
        </Link>
      </div>

      {/* Navigation section */}
      <div
        className={`lg:grow ${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:w-auto`}
      >
        <div
          className={`flex flex-col lg:py-0 lg:space-y-0 space-y-5  lg:pl-20 font-bold text-lg lg:font-normal lg:text-base py-5 px-4 lg:flex-row lg:space-x-5 mt-3 w-full lg:justify-center text-white ${
            isMobile ? "bg-gradient-to-r from-[#180437] to-[#450B9D]" : ""
          }`}
        >
          <div
            onClick={() => {
              setIsMenuOpen(false);
              setNavTabs("home");
            }}
            className={`cursor-pointer hover:text-[#b064fe] ${
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
            className={`cursor-pointer hover:text-[#b064fe] ${
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
            className={`cursor-pointer  hover:text-[#b064fe] ${
              navTabs.includes("terms-of-service") && "text-[#b064fe]  "
            } `}
          >
            Terms of Service
          </div>
        </div>
      </div>

      {/* Icon menu section (moved to the end) */}
      <div className="flex justify-end ">
        <LgSearchBar />
        <button
          className="lg:hidden focus:outline-none -mt-9 w-8 h-8 overflow-hidden flex items-center justify-center transition-all duration-300 ease-in-out text-white"
          onClick={toggleMenu}
        >
          <BsList
            className={`text-white transition-all duration-300 ease-in-out  block h-6 w-6 ${
              isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
