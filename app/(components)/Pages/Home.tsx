import NameOfSite from "../NameOfSite";
import MainCard from "../MainCard";
import FavouriteBox from "../FavouriteBox";
import MSearchBar from "../MSearchBar";

export default function Home() {
  return (
    <>
      <NameOfSite />
      <MSearchBar />
      <div className="w-full flex justify-center">
        <FavouriteBox />
      </div>
    </>
  );
}
