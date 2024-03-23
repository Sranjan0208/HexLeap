import React from "react";
import Image from "next/image";

interface TicketProps {
  ticketImg: string;
  teamName: string;
  eventDate: string;
  eventLocation: string;
  ticketCollection: string;
  darkMode: boolean;
}

const TicketCard: React.FC<TicketProps> = ({
  ticketImg,
  teamName,
  eventDate,
  eventLocation,
  ticketCollection,
  darkMode,
}) => {
  return (
    <div
      className={`${darkMode ? "bg-[#3B3E47]" : "bg-[#F3F4F6]"} ${
        darkMode ? "text-white" : "text-black"
      } shadow-2xl w-full relative transition duration-300 hover:scale-105 hover:shadow-xl`}
    >
      <div className="overflow-hidden">
        <Image
          src={ticketImg}
          alt="Player Image"
          width={400}
          height={400}
          className="p-3 h-[400px] w-full object-cover"
          layout="responsive"
        />
      </div>
      <div
        className={`border-dashed border-2 ${
          darkMode ? "border-white" : "border-black"
        }`}
      ></div>
      <div className="p-3 relative">
        <div className="absolute left-0 top-0 transform -translate-y-1/2 overflow-hidden">
          <div
            className={`w-4 h-6 ${
              darkMode ? "bg-[#221A2C]" : "bg-white"
            } rounded-r-full`}
          ></div>
        </div>
        <div className="absolute right-0 top-0 transform -translate-y-1/2">
          <div
            className={`w-4 h-6 ${
              darkMode ? "bg-[#221A2C]" : "bg-white"
            } rounded-l-full`}
          ></div>
        </div>
        <div className=" flex flex-col items-center justify-center space-y-4">
          <h1
            className={`text-md font-semibold ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {teamName}
          </h1>
          <p className={`text-sm ${darkMode ? "text-white" : "text-black"}`}>
            {eventDate}
          </p>
          <p
            className={`text-sm text-center px-2 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {eventLocation}
          </p>
          <div
            className={`bg-black text-white w-full py-2 flex items-end justify-center text-sm `}
          >
            {ticketCollection}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
