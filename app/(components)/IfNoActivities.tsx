/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const IfNoActivities = ({
  setNavTabs,
}: {
  setNavTabs: React.Dispatch<React.SetStateAction<string>> | null;
}) => {
  return (
    <div className="pt-10 mt-7 xl:pt-20 items-center flex flex-col justify-center ">
      <img
        src="/ifnocard.jpg"
        alt="hero image"
        width={1025}
        height={500}
        className="flex items-center justify-center mx-auto w-80 lg:w-80 rounded-3xl "
      />
      <Link href="/" className="">
        <h2 className="flex justify-center items-center px-10 text-white mt-6">
          {setNavTabs ? "You have 0 completed tasks" : "Not found !!!"}
        </h2>
      </Link>

      {setNavTabs && (
        <div
          onClick={() => {
            if (setNavTabs) {
              setNavTabs("home");
            }
          }}
          className="action  bg-purple-900 mt-4 flex justify-center w-fit"
        >
          <span className="px-10 font-bold text-gray-200">
            <Link href="/" className="">
              Check our offers!
            </Link>

            <span className="ml-2"> →</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default IfNoActivities;
