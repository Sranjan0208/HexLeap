"use client";
import React, { useState } from "react";
import SportSection from "@/components/SportSection/SportSection";
import TicketSection from "@/components/TicketSection/TicketSection";

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <button
        onClick={toggleMode}
        className={`fixed top-4 right-4 p-2 rounded-full ${
          darkMode ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <SportSection darkMode={darkMode} />
      <TicketSection darkMode={darkMode} />
    </div>
  );
};

export default Home;
