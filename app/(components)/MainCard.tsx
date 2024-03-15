"use client";

import { CardsProps } from "@/types/cardsTypes";
import Image from "next/image";

export default function MainCard({
  icon,
  name,
  short_description,
  description,
  amount,
  campaign_os_target,
}: CardsProps) {
  return (
    <div className="max-w-sm cursor-pointer flex flex-col overflow-hidden rounded-xl border-4 border-[#4D229E] ">
      <div className="w-full  max-h-[200px] min-h-[200px]">
        <Image
          className="mx-auto max-h-[210px] min-h-[210px] "
          src={icon}
          alt="Sunset in the mountains"
          width={300}
          height={50}
          objectFit="contain"
        />
      </div>
      <div className="px-6 py-4 bg-black rounded-t-3xl  max-w-[300px] min-w-[184px] min-h-[184px] max-h-[184px]">
        <div className="font-bold text-md text-white mb-2 line-clamp-1">
          {name}
        </div>
        <p className="text-white text-sm line-clamp-1">
          <span className="text-[#8D62DE]">Description :</span>{" "}
          {short_description ? short_description : description}
        </p>
        <div className="w-fit mt-4 border-[rgba(255,255,255,0.5)] rad border-[1px] rounded-3xl  py-1 px-16 ">
          {campaign_os_target == "All" ? (
            <h1 className="text-white">
              {" "}
              <Image src={"/desktop.svg"} alt="" width={20} height={20} />
            </h1>
          ) : (
            <Image
              src={
                campaign_os_target == "All"
                  ? "/desktop.svg"
                  : campaign_os_target == "android"
                  ? "/android.png"
                  : "ios-icon.svg"
              }
              alt="icon"
              width={20}
              height={20}
            ></Image>
          )}
        </div>
        <div className="flex justify-end py-4 ">
          <div
            className="flex justify-center items-center text-[#180934] font-bold  text-md  py-1 px-16 rounded-xl max-w-[100px] min-w-[100px] min-h-[30px] max-h-[30px] lg:max-w-[201px] lg:min-w-[201px] lg:min-h-[39px] lg:max-h-[39px] "
            style={{
              background:
                "linear-gradient(92.16deg, #7655FE 0%, #EE77FF 37.1%, #FE6FFD 66.51%, #FF13DE 100%)",
            }}
          >
            {`${amount} `}

            <Image src={"/coinIcon.png"} alt="" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
