import React from "react";
import Image from "next/image";

interface TicketProps {
  ticketImg: string;
  teamName: string;
  eventDate: string;
  eventLocation: string;
  ticketCollection: string;
}

const TicketCard: React.FC<TicketProps> = ({
  ticketImg,
  teamName,
  eventDate,
  eventLocation,
  ticketCollection,
}) => {
  return (
    <div className="bg-[#3B3E47] text-white shadow-md w-full relative transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="overflow-hidden ">
        <Image
          src={ticketImg}
          alt="Player Image"
          width={400}
          height={400}
          className="p-3  h-[400px]"
          layout="fixed"
        />
      </div>

      <div className="border-dashed border-2 border-white"></div>

      <div className="p-3 relative">
        <div className="absolute -left-2 top-0  transform -translate-y-1/2">
          <div className="w-6 h-6 bg-[#221A2C] rounded-full"></div>
        </div>

        <div className="absolute -right-2 top-0 transform -translate-y-1/2">
          <div className="w-6 h-6 bg-[#221A2C] rounded-full"></div>
        </div>
        <div className=" flex flex-col items-center justify-center space-y-4">
          <h1 className="text-md font-semibold">{teamName}</h1>
          <p className=" text-sm"> {eventDate} </p>
          <p className="text-sm text-center px-2">{eventLocation}</p>
          <div className="bg-black w-full py-2 flex items-end justify-center text-sm ">
            {ticketCollection}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
