import React, { useEffect, useState } from "react";
import FavouriteCard from "./FavouriteCard";
import DeviceFilter from "./DeviceFilter";
import { useDataContext } from "@/contexts/DataContext";
import { CardsProps } from "@/types/cardsTypes";
import { useDeviceType } from "@/contexts/DeviceTypeContext";

const FavouriteBox = () => {
  const [fav, setFav] = useState<CardsProps[] | []>([]);
  const { deviceType, setDeviceType } = useDeviceType();

  const { dataArr } = useDataContext();

  useEffect(() => {
    let theFavCards: CardsProps[] = dataArr.filter(
      (item) => item.favourite === 1
    );
    setFav(theFavCards);
  }, [dataArr]);
  if (fav.length > 0) {
    return (
      <div className="w-full flex justify-center">
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
                  <FavouriteCard
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
  } else {
    return (
      <div className="mt-12">
        <DeviceFilter
          selectedPlatform={deviceType}
          setSelectedPlatform={setDeviceType}
        />
      </div>
    );
  }
};

export default FavouriteBox;
