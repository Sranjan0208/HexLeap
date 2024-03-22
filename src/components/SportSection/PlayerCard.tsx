import React from "react";
import Image from "next/image";

interface PlayerCardProps {
  playerImg: string;
  playerTeam: string;
  eventNumber: number;
  sport: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  playerImg,
  playerTeam,
  eventNumber,
  sport,
}) => {
  return (
    <div className="bg-[#3B3E47] text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="overflow-hidden">
        <Image
          src={playerImg}
          alt="Player Image"
          width={200}
          height={400}
          className="p-3 w-full h-[400px]"
          layout="fixed"
        />
      </div>
      <div className="p-3">
        <h2 className="text-lg mb-2">{playerTeam}</h2>
        <div className="bg-[#292B32] p-3 flex justify-between">
          <div>
            <p className="text-gray-300 mb-1 text-sm ">Total Events</p>
            <p className="text-gray-300 text-sm font-bold">
              {eventNumber} events
            </p>
          </div>
          <div>
            <p className="text-gray-300 mb-1 text-sm ">Sport</p>
            <p className="text-gray-300 text-sm font-bold">{sport}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
