"use client";

import Image from "next/image";

export default function FavouriteCard() {
  return (
    <div
      className="flex items-center rounded-md gap-6 relative lg:max-w-[566px] lg:min-w-[566px] max-w-[313px]  min-w-[313px] lg:max-h-[144px] lg:min-h-[144px] p-2"
      style={{
        background:
          "linear-gradient(93.43deg, #8359FE 1.1%, #F274FE 32.78%, #F772FE 58.67%, #FE53F3 71.12%, #FF26E4 100%)",
      }}
    >
      <Image
        className="lg:max-w-[137px] lg:min-w-[137px] lg:max-h-[120px] lg:min-h-[120px]   min-w-[80px] max-w-[80px]  min-h-[65px] max-h-[65px] py-1 px-2"
        src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/0a/b4/6c/0ab46cd6-d503-4c89-982a-3b8cb0750279/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg"
        alt=""
        width={1000}
        height={1000}
      />
      <div className="flex flex-col">
        <h5 className=" text-[14px] lg:text-[16px] font-[600] tracking-tight text-[#1A0248] dark:text-white line-clamp-2">
          Join the millions of survey-takers in their quest to make money on
          their phones! Poll Pay is leading the way as the best cash app 2021 to
          earn real money rewards on your smartphone.{" "}
        </h5>
        <p className="mb-1 text-[10px] lg:text-[16px] font-[600] text-gray-200 line-clamp-1">
          Join the millions of survey-takers in their quest to make money on
          their phones! Poll Pay is leading the way as the best cash app 2021 to
          earn real money rewards on your smartphone.
        </p>
        <div className=" w-fit border-[1px]  border-[#373737] rounded-3xl py-[1px] px-5 lg:px-10  justify-start">
          <Image
            className="lg:w-[18px] lg:h-[18px] w-[7px] h-[7px]"
            src={"/ios.png"}
            alt=""
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex absolute right-2 bottom-[2px] justify-end py-2 ">
          <button className="text-[#180934] text-[10px]  lg:text-[16px] lg:-my-1  -my-1.5  rounded w-fit font-bold text-sm bg-[#FBCCFF] px-[12px] lg:px-14 lg:py-2  ">
            Reward
          </button>
        </div>
      </div>
    </div>
  );
}
