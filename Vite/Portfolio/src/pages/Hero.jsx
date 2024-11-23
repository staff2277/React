import React from "react";
import HeroText from "../../components/HeroText";
import HeroFooter from "../../components/HeroFooter";
import HeroImg from "../../components/HeroImg";
import Navbar from "../../components/Navbar";

const Hero = () => {
  return (
    <div className="h-screen px-10 pt-5 ">
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
