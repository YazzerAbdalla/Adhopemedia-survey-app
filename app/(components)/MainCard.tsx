"use client";

import Image from "next/image";

export default function MainCard() {
  return (
    <div className="max-w-sm rounded flex flex-col overflow-hidden border-2 border-[#4D229E]">
      <div
        className="w-full max-h-48 min-h-48 "
        style={{ width: "100%", height: "100%" }}
      >
        <Image
          className="mx-auto"
          src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
          alt="Sunset in the mountains"
          width={1000}
          height={1000}
          objectFit="contain"
        />
      </div>
      <div className="px-6 py-4 bg-black">
        <div className="font-bold text-md text-white mb-2">
          PKG Masters Series S2t4-Overwatch
        </div>
        <p className="text-white text-sm">
          <span className="text-[#8D62DE]">Description :</span> Lorem ipsum
          dolor sit amet
        </p>
        <div className="w-fit mt-4 border-[rgba(255,255,255,0.5)] rad border-[1px] rounded-3xl  py-1 px-16 ">
          <Image src={"/android.png"} alt="icon" width={20} height={20}></Image>
        </div>
        <div className="flex justify-end py-4  ">
          <div
            className="flex items-center text-[#180934] font-bold text-md  py-1 px-16"
            style={{
              background:
                "linear-gradient(92.16deg, #7655FE 0%, #EE77FF 37.1%, #FE6FFD 66.51%, #FF13DE 100%)",
            }}
          >
            Reward
            <Image src={"/coinIcon.png"} alt="" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
