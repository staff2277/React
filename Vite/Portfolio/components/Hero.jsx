import React from "react";
import HeroText from "./HeroText";
import HeroFooter from "./HeroFooter";
import HeroImg from "./HeroImg";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-between  h-[90%]">
        <div className="flex flex-col justify-between ">
          <HeroText />
          <HeroFooter />
        </div>
        <div className=" flex justify-end items-end">
          <HeroImg />
        </div>
      </div>
    </div>
  );
};

export default Hero;
