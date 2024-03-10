"use client";


export default function MainCard() {
  return (
    <div className="fixed left-0 right-0 top-56 flex justify-center items-center">
      <div className="max-w-sm rounded overflow-hidden border-2 border-[#4D229E]">
        <img
          className="mx-auto"
          src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4 bg-black">
          <div className="font-bold text-md text-white mb-2">
            PKG Masters Series S2t4-Overwatch
          </div>
          <p className="text-white text-sm">
            <span className="text-[#8D62DE]">Description :</span> Lorem ipsum
            dolor sit amet
          </p>
          <div className="flex justify-end py-4  ">
            <button
              className="text-[#180934] font-bold text-md  py-1 px-16"
              style={{
                background: "linear-gradient(92.16deg, #7655FE 0%, #EE77FF 37.1%, #FE6FFD 66.51%, #FF13DE 100%)",
              }}
            >
             Reward
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
