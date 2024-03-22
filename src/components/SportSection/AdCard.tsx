import React from "react";
import Image from "next/image";

const AdvertisementCard = () => {
  return (
    <div className="relative bg-[#3B3E47] text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="overflow-hidden">
        <Image
          src="/ad.png"
          alt="Advertisement"
          width={500}
          height={500}
          className="p-3 w-full"
        />
        <div className="absolute top-0 right-0 bg-black text-white px-3  m-3 text-sm font-semibold">
          Ad
        </div>
      </div>
      <div className="p-3">
        <div className="p-1 flex flex-col justify-between">
          <div>
            <p className="text-gray-300 mb-1 text-lg font-bold">
              Advertisement title
            </p>
            <p className="text-gray-300 text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementCard;
