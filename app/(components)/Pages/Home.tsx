import NameOfSite from "../NameOfSite";
import MainCard from "../MainCard";
import FavouriteCard from "../FavouriteCard";
import Image from "next/image";
import FavouriteBox from "../FavouriteBox";

export default function Home() {
  return (
    <>
      <NameOfSite />
      <div className="w-full flex justify-center">
        <FavouriteBox />
      </div>
    </>
  );
}
