import Image from "next/image";
import React from "react";

interface ActivitiesCardProps {
  offername: string;
  status: string;
  image: string;
}

const ActivitiesCard = ({ offername, status, image }: ActivitiesCardProps) => {
  const getStatusColor = () => {
    if (status === "pending") {
      return "#FFF500";
    } else if (status === "completed") {
      return "#03A900";
    } else if (status === "Pending") {
      return "#FFF500";
    } else if (status === "Completed") {
      return "#03A900";
    }
    return "#FF0000";
  };

  return (
    <div className="flex bg-[#D3B4FF] items-center rounded-md gap-6 relative lg:max-w-[566px] lg:min-w-[566px] max-w-[313px]  min-w-[313px] lg:max-h-[144px] lg:min-h-[144px] p-2">
      <Image
        className="lg:max-w-[137px] lg:min-w-[137px] lg:max-h-[120px] lg:min-h-[120px]   min-w-[70px] max-w-[70px]  min-h-[55px] max-h-[55px] py-2 px-3"
        src={image}
        alt=""
        width={1000}
        height={1000}
      />
      <div className="flex flex-col ">
        <h5 className=" text-sm lg:text-xl -mt-12 font-[600] tracking-tight text-[#1A0248] dark:text-white">
        {offername}
        </h5>

        <div className="flex absolute right-2 bottom-[2px] justify-end py-2 ">
          <button
            className="text-[#180934] text-[10px] lg:text-[16px] rounded w-fit font-bold text-sm bg-[#FBCCFF] px-[12px] lg:px-14 lg:py-2  "
            style={{
              background: getStatusColor(),
            }}
          >
            {status && (
              <>
                <span style={{ textTransform: "capitalize" }}>
                  {status.charAt(0)}
                </span>
                {status.slice(1)}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesCard;