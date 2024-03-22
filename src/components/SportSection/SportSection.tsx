import React from "react";
import PlayerCard from "./PlayerCard";
import AdvertisementCard from "./AdCard";

interface SportSectionProps {
  darkMode: boolean;
}

const SportSection: React.FC<SportSectionProps> = ({ darkMode }) => {
  const playerData = [
    {
      playerImg: "/player1.png",
      playerTeam: "Sacramento River Cats",
      eventNumber: 48,
      sport: "Baseball",
    },
    {
      playerImg: "/player2.png",
      playerTeam: "Las Vegas Aviators",
      eventNumber: 28,
      sport: "Baseball",
    },
    {
      playerImg: "/player3.png",
      playerTeam: "New jersey devils",
      eventNumber: 15,
      sport: "Ice Hockey",
    },
    {
      playerImg: "/player2.png",
      playerTeam: "Las Vegas Aviators",
      eventNumber: 28,
      sport: "Baseball",
    },
  ];

  return (
    <section
      className={`${
        darkMode ? "bg-[#292B32]" : "bg-white"
      } p-10 flex justify-center`}
    >
      <div className="max-w-[80%] sm:max-w-[95%] md:max-w-[90%]">
        <h1
          className={`font-bold mb-8 text-3xl underline decoration-[#738FFF] decoration-4${
            darkMode ? " text-white" : "text-black"
          }`}
        >
          Sports
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          {playerData.map((player, index) => (
            <PlayerCard
              key={index}
              playerImg={player.playerImg}
              playerTeam={player.playerTeam}
              eventNumber={player.eventNumber}
              sport={player.sport}
              darkMode={darkMode}
            />
          ))}
          <AdvertisementCard darkMode={darkMode} />
        </div>
        <div className="flex mt-10 items-center justify-center">
          <button className="bg-[#2C9CF0] px-4 py-2 rounded text-white text-sm font-semibold">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default SportSection;
