"use client";
import { useSearchFilterContext } from "@/contexts/SearchFilterContext";
import dynamic from "next/dynamic";

const DynamicFaSearch = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaSearch),
  {
    ssr: false,
  }
);

export default function MSearchBar() {
  const { searchFilter, setSearchFilter } = useSearchFilterContext();

  const handleChange = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setSearchFilter(value);
  };
  return (
    <form className="max-w-[150px] min-w-[150px] hidden lg:block">
      <label
        htmlFor="default-search"
        className="mb-0 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative z-1000">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <DynamicFaSearch className="w-4 h-4 text-[#B064FE]" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-2 ps-10 text-sm text-gray-900 border-2 border-[#B064FE] rounded-3xl bg-gray-50 focus:ring-[#B064FE] focus:border-[#B064FE]"
          placeholder="Search Title..."
          onChange={handleChange}
          value={searchFilter}
          required
        />
      </div>
    </form>
  );
}
