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
<label htmlFor="default-search" className="mb-0 text-sm font-medium text-gray-900 sr-only">Search</label>
    <div className="relative z-1000">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <DynamicFaSearch className="w-4 h-4 text-[#B064FE]" />
        </div>
        <input 
            type="search" 
            id="default-search" 
            className="block w-full p-3 ps-10 text-sm text-gray-900 border-2 border-[#B064FE] rounded-3xl bg-gray-50 focus:ring-[#B064FE] focus:border-[#B064FE]" 
            placeholder="Search Title..." 
            required 
        />
    </div>
</form>


  );
}
