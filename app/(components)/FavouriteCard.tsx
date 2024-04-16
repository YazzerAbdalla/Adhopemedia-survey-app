/* eslint-disable @next/next/no-img-element */
"use client";

import { CardsProps } from "@/types/cardsTypes";

export default function FavouriteCard({
  icon,
  name,
  short_description,
  description,
  amount,
  campaign_os_target,
}: CardsProps) {
  return (
    <div
      className="flex items-center z-0 rounded-md gap-1 relative lg:max-w-[566px] lg:min-w-[566px] max-w-[313px]  min-w-[313px] lg:max-h-[144px] lg:min-h-[144px] p-2"
      style={{
        background:
          "linear-gradient(93.43deg, #8359FE 1.1%, #F274FE 32.78%, #F772FE 58.67%, #FE53F3 71.12%, #FF26E4 100%)",
      }}
    >
      <img
        className="lg:max-w-[137px] lg:min-w-[137px] lg:max-h-[120px] lg:min-h-[120px]   min-w-[80px] max-w-[80px]  min-h-[65px] max-h-[65px] py-1 px-2"
        src={icon}
        alt=""
        width={1000}
        height={1000}
      />
      <div className="flex flex-col">
        <h5 className=" text-[14px] lg:text-[16px] font-[600] tracking-tight text-[#1A0248] dark:text-white line-clamp-2">
          {name}
        </h5>
        <p className="mb-1 text-[10px] lg:text-[16px] font-[600] text-gray-200 line-clamp-1">
          {short_description ? short_description : description}
        </p>
        <div className=" w-fit border-[1px]  border-[#373737] rounded-3xl py-[1px] px-5 lg:px-10  justify-start">
          <img
            src={
              campaign_os_target == "all"
                ? "/desktop.svg"
                : campaign_os_target == "android"
                ? "/android.png"
                : "/ios-icon.svg"
            }
            alt="icon"
            width={20}
            height={20}
          ></img>
        </div>
        <div className="flex absolute right-2 bottom-[2px] justify-end py-2">
          <button className="text-[#180934] text-[10px] lg:text-[16px] lg:-my-1 -my-1.5 rounded w-fit font-bold text-sm bg-[#FBCCFF] px-[12px] lg:px-14 lg:py-2 flex items-center">
            {amount}
            <img
              src={"/coinIcon.png"}
              alt=""
              width={20}
              height={20}
              className="ml-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
