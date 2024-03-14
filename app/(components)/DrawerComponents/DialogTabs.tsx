import React from "react";
import { useDialogTabs } from "@/contexts/DialogTabs";
import { useDeviceType } from "@/contexts/DeviceTypeContext";

const DialogTabs = () => {
  const { dialogTab, setDialogTab } = useDialogTabs();
  const { deviceType } = useDeviceType();

  return (
    <div className="flex justify-center gap-6 items-center w-full bg-[#1F0349] text-white">
      <div className="flex flex-col justify-center items-center">
        <div
          onClick={() => setDialogTab("details")}
          className={`flex items-center text-lg px-3 py-2 cursor-pointer rounded `}
        >
          Offer Details
        </div>
        <div
          className={`bg-[#B094E5] w-[180px] h-[7px] rounded-tl-3xl rounded-tr-3xl ${
            dialogTab !== "details" && "hidden"
          }`}
        ></div>
      </div>

      {deviceType === "All" && (
        <div className="flex flex-col justify-center items-center">
          <div
            onClick={() => setDialogTab("links")}
            className={`flex items-center text-lg px-3 py-2 cursor-pointer rounded `}
          >
            Get link options
          </div>
          <div
            className={`bg-[#B094E5] w-[180px] h-[7px] rounded-tl-3xl rounded-tr-3xl ${
              dialogTab !== "links" && "hidden"
            }`}
          ></div>
        </div>
      )}
    </div>
  );
};

export default DialogTabs;
