import React from "react";
import Image from "next/image";

interface PlayerCardProps {
  playerImg: string;
  playerTeam: string;
  eventNumber: number;
  sport: string;
  darkMode: boolean;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  playerImg,
  playerTeam,
  eventNumber,
  sport,
  darkMode,
}) => {
  return (
    <div
      className={`bg-${darkMode ? "[#3B3E47]" : "[#F3F4F6]"} text-${
        darkMode ? "white" : "black"
      } shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl`}
    >
      <div className="overflow-hidden">
        <Image
          src={playerImg}
          alt="Player Image"
          width={200}
          height={400}
          className="p-3 w-full h-auto"
          layout="responsive"
        />
      </div>
      <div className="p-3">
        <h2 className="text-lg mb-2">{playerTeam}</h2>
        <div
          className={`${
            darkMode ? "bg-[#292B32]" : "bg-gray-200"
          } p-3 flex flex-col sm:flex-row justify-between`}
        >
          <div className="mb-2 sm:mb-0">
            <p
              className={`text-${
                darkMode ? "gray-300" : "gray-600"
              } mb-1 text-sm `}
            >
              Total Events
            </p>
            <p
              className={`text-${
                darkMode ? "gray-300" : "gray-600"
              } text-sm font-bold`}
            >
              {eventNumber} events
            </p>
          </div>
          <div>
            <p
              className={`text-${
                darkMode ? "gray-300" : "gray-600"
              } mb-1 text-sm `}
            >
              Sport
            </p>
            <p
              className={`text-${
                darkMode ? "gray-300" : "gray-600"
              } text-sm font-bold`}
            >
              {sport}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
