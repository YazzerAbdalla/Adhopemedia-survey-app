"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="mx-auto flex items-center px-24 py-4">
      <h1 className="font-bold text-white text-2xl ">LOGO</h1>
      <div className="grow">
        <div className="flex justify-center items-center pr-20 space-x-5 text-white">
          <div>Home</div>
          <div>Activity</div>
          <div>Terms of Service</div>
        </div>
      </div>
    </div>
  );
}
