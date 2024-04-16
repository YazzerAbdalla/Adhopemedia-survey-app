/* eslint-disable @next/next/no-img-element */
"use client";

import { CardsProps } from "@/types/cardsTypes";

export default function MainCard({
  icon,
  name,
  short_description,
  description,
  amount,
  campaign_os_target,
}: CardsProps) {
  return (
    <div className="shadow-xl shadow-[#9741ec]  max-w-[175px] min-w-[175px] max-h-[260px] min-h-[260px]  cursor-pointer flex flex-col overflow-hidden rounded-xl border-4 border-[#4D229E]  lg:hidden ">
      <div className="w-full  max-w-[200px] min-w-[200px] max-h-[135px] min-h-[135px] ">
        <img
          className="mx-auto  max-w-[200px] min-w-[200px] max-h-[135px] min-h-[135px] "
          src={icon}
          alt="Sunset in the mountains"
          width={300}
          height={50}
          typeof="lazy"
        />
      </div>
      <div className="px-2 py-2  bg-black rounded-t-2xl  max-w-[175px] min-w-[175px] min-h-[300px] max-h-[300px]">
        <div className="font-bold text-md text-white mb-2 line-clamp-1  ">
          {name}
        </div>

        <div className="flex justify-end py-4 ">
          <div className="">
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
          <div
            className="flex justify-center items-center text-[#180934] font-bold  text-md mx-4  py-1 px-15 rounded-xl max-w-[100px] min-w-[100px] min-h-[30px] max-h-[30px]  "
            style={{
              background:
                "linear-gradient(92.16deg, #7655FE 0%, #EE77FF 37.1%, #FE6FFD 66.51%, #FF13DE 100%)",
            }}
          >
            {`${amount} `}

            <img src={"/coinIcon.png"} alt="" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
