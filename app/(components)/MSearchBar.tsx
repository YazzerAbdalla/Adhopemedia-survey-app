"use client";
import dynamic from "next/dynamic";

const DynamicFaSearch = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaSearch),
  {
    ssr: false,
  }
);

export default function MSearchBar() {
  return (

<form className=" mx-auto pl-3 py-3 max-w-[359px] min-w-[359px] max-h-[41.76px] min-h-[41.76px] block lg:hidden">   
    <label htmlFor="default-search" className="mb-2  text-sm font-medium text-gray-900 sr-only ">Search</label>
    <div className="relative z-1000">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-[#B064FE] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border-2 border-[#B064FE] rounded-3xl bg-gray-50 focus:ring-[#B064FE] focus:border-[#B064FE] " placeholder="Search Title, DES..." required />
    </div>
</form>


  );
}
