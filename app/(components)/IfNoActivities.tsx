import Image from "next/image";
import Link from "next/link";
import React from "react";

const IfNoActivities = ({
  setNavTabs,
}: {
  setNavTabs: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="pt-10 mt-7 xl:pt-20 items-center flex flex-col justify-center">
      <Image
        src="/Asset_1.svg"
        alt="hero image"
        width={1025}
        height={500}
        className="flex items-center justify-center mx-auto w-80 lg:w-96"
      />
      <Link href="/" className="">
        <h2 className="flex justify-center items-center px-10 text-white mt-6">
          You have 0 compeleted tasks
        </h2>
      </Link>

      <div
        onClick={() => {
          setNavTabs("home");
        }}
        className="action  bg-purple-900 mt-4 flex justify-center w-fit"
      >
        <span className="px-10 font-bold text-gray-200">
          Check our offers!
          <span className="ml-2"> →</span>
        </span>
      </div>
    </div>
  );
};

export default IfNoActivities;
