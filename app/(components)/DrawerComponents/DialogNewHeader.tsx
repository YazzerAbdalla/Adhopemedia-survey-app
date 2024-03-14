import { useDataContext } from "@/contexts/DataContext";
import { CardsProps } from "@/types/cardsTypes";
import Image from "next/image";
import React from "react";

const DialogNewHeader = ({
  icon,
  name,
  short_description,
  description,
  amount,
  campaign_os_target,
}: CardsProps) => {
  return (
    <div className="w-full p-6 h-fit">
      <div className="flex items-center rounded-md gap-1 relative w-full bg-[#280A46] lg:max-h-[144px] lg:min-h-[144px] p-2">
        <Image
          className="lg:max-w-[137px] lg:min-w-[137px] lg:max-h-[120px] lg:min-h-[120px] rounded-[20px] min-w-[80px] max-w-[80px]  min-h-[65px] max-h-[65px] py-1 px-2"
          src={icon}
          alt=""
          width={1000}
          height={1000}
        />
        <div className="flex flex-col">
          <h5 className=" text-[14px] lg:text-[16px] font-[600] tracking-tight text-white line-clamp-1">
            {name}
          </h5>
          <p className="mb-1 text-[10px] lg:text-[16px] font-[600] text-gray-200 line-clamp-1">
            {short_description ? short_description : description}
          </p>
          <div className=" w-fit border-[1px]  border-[#373737] rounded-3xl py-[1px] px-5 lg:px-10  justify-start">
            {campaign_os_target == "All" ? (
              <h1 className="text-white">All</h1>
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
          <div className="flex absolute right-2 bottom-[2px] justify-end py-2 ">
            <div
              className="flex justify-center items-center text-[#180934] font-bold  text-md  py-1 px-16 max-w-[201px] min-w-[201px] min-h-[39px] max-h-[39px] rounded-[5px] lg:max-w-[201px] lg:min-w-[201px] lg:min-h-[39px] lg:max-h-[39px] "
              style={{
                background:
                  "linear-gradient(92.16deg, #7655FE 0%, #EE77FF 37.1%, #FE6FFD 66.51%, #FF13DE 100%)",
              }}
            >
              {amount}
              <Image src={"/coinIcon.png"} alt="" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogNewHeader;
