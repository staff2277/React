import React from "react";
import HeroText from "./HeroText";
import HeroFooter from "./HeroFooter";
import HeroImg from "./HeroImg";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-between h-[90%] mddd-only:flex-col">
        <div className="flex flex-col justify-between seee-only:block">
          <HeroText />
          <HeroFooter />
        </div>
        <div className="flex max-w-full justify-end items-end relative overflow-hidden object-contain">
          <HeroImg />
        </div>
      </div>
    </div>
  );
};

export default Hero;
