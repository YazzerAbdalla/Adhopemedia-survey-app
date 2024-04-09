import React from "react";
import { useDialogTabs } from "@/contexts/DialogTabs";
import { useDeviceType } from "@/contexts/DeviceTypeContext";

const DialogTabs = () => {
  const { dialogTab, setDialogTab } = useDialogTabs();
  const { deviceType } = useDeviceType();
  console.log("🚀 ~ DialogTabs ~ deviceType:", deviceType);

  return (
    <div
      className={`flex ${
        deviceType !== "All" ? "justify-center" : "justify-center"
      } lg:px-20 px-5 items-center w-full bg-[#1F0349] text-white`}
    >
      <div className="flex flex-col justify-center items-center">
        <div
          onClick={() => setDialogTab("details")}
          className="flex items-center text-lg px-3 py-2 cursor-pointer rounded"
        >
          Offer Details
        </div>
        {dialogTab === "details" && (
          <div className="bg-[#B094E5] w-[180px] h-[7px] rounded-tl-3xl rounded-tr-3xl"></div>
        )}
      </div>

      {/* {deviceType !== "All" && (
        <div className="flex flex-col justify-center items-center">
          <div
            onClick={() => setDialogTab("links")}
            className="flex items-center text-nowrap text-lg px-3 py-2 cursor-pointer rounded "
          >
            Get link options
          </div>
          {dialogTab === "links" && (
            <div className="bg-[#B094E5] w-[180px]  h-[7px] rounded-tl-3xl rounded-tr-3xl"></div>
          )}
        </div>
      )} */}
    </div>
  );
};

export default DialogTabs;
