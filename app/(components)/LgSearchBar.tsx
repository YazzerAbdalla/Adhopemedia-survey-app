"use client";

import { FaSearch } from "react-icons/fa";

export default function LgSearchBar() {
  return (
    <div className="mx-auto max-w-[160px] min-w-[160px] max-h-[39px] min-h-[39px] hidden lg:block">
      <div className="relative mb-0 flex w-full flex-wrap items-stretch ">
        <span className="z-10 h-full leading-snug font-normal absolute text-center text-[#B064FE] bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
          <FaSearch />
        </span>
        <input
          type="text"
          className="relative m-0 block w-full rounded-xl border-2 border-solid border-neutral-300 bg-white bg-clip-padding px-10 py-[0.25rem] text-base font-normal leading-[1.6] text-gray-950 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_#B064FE] focus:outline-none"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon3 "
        />
        <button
          type="button"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        ></button>
      </div>
    </div>
  );
}
