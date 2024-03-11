"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="mx-auto flex items-center px-24 py-4">
      <h1 className="font-bold text-white text-2xl ">LOGO</h1>
      <div className="grow">
        <div className="flex flex-col lg:py-0 lg:px-0 font-bold text-lg lg:font-normal lg:text-base py-2 px-4 lg:flex-row  lg:space-x-5 w-full lg:justify-center lg:bg-transparent bg-gradient-to-r from-[#180437] to-[#410b95] text-white">
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
