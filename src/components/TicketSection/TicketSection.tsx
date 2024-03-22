import React from "react";

import TicketCard from "./TicketCard";

const TicketSection = () => {
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
    <section className="bg-[#292B32] p-10 flex justify-center">
      <div className="bg-gradient-to-b from-[#18282A] to-[#221A2C] flex flex-col items-center justify-center w-[80%] h-[90%] p-10">
        <h1 className="text-5xl font-bold text-white mb-5">
          Collection Spotlight
        </h1>
        <p className="text-white text-center">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
        <div className="mt-10 grid grid-cols-3 gap-4 px-20">
          {ticketData.map((ticket, index) => (
            <TicketCard
              key={index}
              ticketImg={ticket.ticketImg}
              teamName={ticket.teamName}
              eventDate={ticket.eventDate}
              eventLocation={ticket.eventLocation}
              ticketCollection={ticket.ticketCollection}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketSection;
