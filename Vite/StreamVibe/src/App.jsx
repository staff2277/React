import { useState } from "react";
import "./App.css";
import Navbar from "../components/Navbar";
import NavGrid from "../components/NavGrid";
import data from "../components/data";

function App() {
  const heroGrid = data.map((data) => {
    return <NavGrid key={data.id} imageUrl={data.imageUrl} />;
  });

  return (
    <div className="bg-[#000000ee]">
      <Navbar />
      <div className="border-2 border-blue-700 grid grid-cols-9 gap-3 relative">
        <img
          className="absolute  bottom-0 z-10 "
          src="/images/fade-top.svg"
          alt="fade-effect"
        />
        <img
          className="absolute  top-0 z-10"
          src="/images/fade-bottom.svg"
          alt="fade-effect"
        />
        <div className="flex items-center justify-center absolute top-[25%] left-0 w-full z-30 h-1/2">
          <img
            src="/images/play.svg"
            className="z-31 w-80 h-80" 
            alt=""
          />
        </div>

        {heroGrid}
      </div>
    </div>
  );
}

export default App;
