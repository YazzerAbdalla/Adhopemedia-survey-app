import React from "react";
import FavouriteCard from "./FavouriteCard";
import DeviceFilter from "./DeviceFilter";
import { useDataContext } from "@/contexts/DataContext";

const FavouriteBox = () => {
  const { dataArr } = useDataContext();

  return (
    <div className=" shadow-lg rounded-xl p-6 lg:p-12 bg-[#1A004A80] ">
      <div className="flex mb-3 flex-row gap-6 justify-between ">
        <div>
          <h1 className="text-[24px] lg:text-[48px] font-bold text-white ">
            OUR FAVOURITES
          </h1>
          <h3 className="text-[12px] lg:text-[16px] font-bold text-white">
            PICK YOUR GAME
          </h3>
        </div>
        <div className="font-bold mt-6 h-[26px] rounded-lg  w-fit py-1 px-6">
          {/* <DeviceFilter /> */}
        </div>
      </div>
      <div className="grid lg:grid-rows-2  lg:grid-cols-2  justify-center gap-8">
        {/* <FavouriteCard /> */}
      </div>
    </div>
  );
};

export default FavouriteBox;
