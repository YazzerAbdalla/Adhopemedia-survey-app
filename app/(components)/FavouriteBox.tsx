import React, { useEffect, useState } from "react";
import FavouriteCard from "./FavouriteCard";
import DeviceFilter from "./DeviceFilter";
import { useDataContext } from "@/contexts/DataContext";
import { useDeviceType } from "@/contexts/DeviceTypeContext";
import { FavProps } from "@/types/FavProps";
import { highSort } from "../(Fun)/HighSort";
import { useSortContext } from "@/contexts/SortContext";
import Favourite from "./favouriteDialog";

const FavouriteBox = () => {
  const [fav, setFav] = useState<FavProps[]>([]);
  console.log("🚀 ~ FavouriteBox ~ fav:", fav);
  const { deviceType, setDeviceType } = useDeviceType();
  const { dataArr } = useDataContext();
  const { sortArr } = useSortContext();

  let sortedArr = highSort(sortArr);
  let theFavCards: FavProps[];
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    theFavCards = dataArr.filter((item) => item.favourite === 1);
    setFav(theFavCards.length <= 0 ? sortArr : theFavCards);
  }, [dataArr]);

  return (
    <div className="w-full flex justify-center px-3 py-12 lg:py-0">
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
          <div className="font-bold mt-6 h-[26px] mb-8  rounded-lg  w-fit py-1 px-6">
            <DeviceFilter
              selectedPlatform={deviceType}
              setSelectedPlatform={setDeviceType}
            />
          </div>
        </div>
        <div className="grid lg:grid-rows-2  lg:grid-cols-2  justify-center gap-8">
          {fav
            ?.slice(0, 4)
            .map(
              ({
                campaign_id,
                icon,
                name,
                short_description,
                description,
                amount,
                campaign_os_target,
              }) => (
                <Favourite
                  url=""
                  key={campaign_id}
                  amount={amount}
                  campaign_id={campaign_id}
                  campaign_os_target={campaign_os_target}
                  description={description}
                  icon={icon}
                  short_description={short_description}
                  name={name}
                />
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default FavouriteBox;
