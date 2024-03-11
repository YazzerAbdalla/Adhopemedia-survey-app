"use client";

export default function FavouriteCard() {
  return (
    <div className="fixed left-0 right-0 top-60 flex justify-center items-center">
      <div
className="flex flex-row items-center  rounded-md lg:max-w-[566px] lg:max-h-[144px]   max-w-[313px] max-h-[64px] min-h-[64px] min-w-[313px] "        style={{
          background:
            "linear-gradient(93.43deg, #8359FE 1.1%, #F274FE 32.78%, #F772FE 58.67%, #FE53F3 71.12%, #FF26E4 100%)",
        }}
      >
        <img
          className="lg:max-w-40 lg:min-w-40  lg:max-h-36 lg:min-h-36  min-w-[70px] max-w-[70px]  min-h-[55px] max-h-[55px] py-2 px-3"
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/0a/b4/6c/0ab46cd6-d503-4c89-982a-3b8cb0750279/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-md font-bold tracking-tight text-[#1A0248] dark:text-white">
            PKG Masters Series S2t4-Overwatch
          </h5>
          <p className="mb-1 text-sm text-gray-200 ">
            Lorem ipsum dolor sit amet 
          </p>
          <div className="flex justify-start py-1">
            <button
              className=" border-2  border-[#8D62DE] rounded-3xl py-0 px-16 ">
              💻
            </button>
          </div>
          <div className="flex justify-end py-2  ">
            <button
              className="text-[#180934] font-bold text-sm bg-[#FBCCFF]  py-1 px-16"
              
            >
             Reward 💰
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
