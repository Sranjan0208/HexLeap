import React from "react";
import TicketCard from "./TicketCard";

interface TicketSectionProps {
  darkMode: boolean;
}

const TicketSection: React.FC<TicketSectionProps> = ({ darkMode }) => {
  const ticketData = [
    {
      ticketImg: "/ticket1.png",
      teamName: "Las Vegas Aviators",
      eventDate: "Oct 15 | SUN | 4:30 PM",
      eventLocation: "Las Vegas Ballpark, Las Vegas, Nevada",
      ticketCollection: "Take Flight Collection",
    },
    {
      ticketImg: "/ticket2.png",
      teamName: "Sacramento River Cats",
      eventDate: "Oct 15 | SUN | 4:30 PM",
      eventLocation: "Sutter Health Park, Sacramento, California",
      ticketCollection: "Orange Collection",
    },
    {
      ticketImg: "/ticket1.png",
      teamName: "Las Vegas Aviators",
      eventDate: "Oct 15 | SUN | 4:30 PM",
      eventLocation: "Las Vegas Ballpark, Las Vegas, Nevada",
      ticketCollection: "Take Flight Collection",
    },
  ];

  return (
    <section
      className={`bg-${
        darkMode ? "[#292B32]" : "[#F3F4F6]"
      } p-10 flex justify-center`}
    >
      <div
        className={`${
          darkMode ? "bg-gradient-to-b from-[#18282A] to-[#221A2C]" : "bg-white"
        }  flex flex-col items-center justify-center w-[90%] sm:w-[80%] p-10`}
      >
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-${
            darkMode ? "white" : "black"
          } mb-5 text-center`}
        >
          Collection Spotlight
        </h1>
        <p
          className={`text-sm sm:text-base text-${
            darkMode ? "white" : "black"
          } text-center`}
        >
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-20">
          {ticketData.map((ticket, index) => (
            <TicketCard
              key={index}
              ticketImg={ticket.ticketImg}
              teamName={ticket.teamName}
              eventDate={ticket.eventDate}
              eventLocation={ticket.eventLocation}
              ticketCollection={ticket.ticketCollection}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketSection;
