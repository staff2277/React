import React from "react";
import { useState } from "react";
import Lottie from "lottie-react";
import dot from  "../animations/dot4.json";
const Navbar = () => {

  

  return (
    <>
      <nav className="flex justify-between pt-3 items-center h-[10%]">
        <div className="border-2">
          <p className="font-bold text-[1.15rem] dee-only:text-[.9rem]">MUSTAPHA OSMAN</p>
          <p className="text-[.9rem] text-center dee-only:text-[.75rem]">Front-End Developer</p>
        </div>
        <ul className="flex gap-14 items-center ">
          <li className="md-only:hidden">
            <a href="#">About</a>
          </li>
          <li className="md-only:hidden">
            <a href="#">Contact</a>
          </li>
          <li className="pl-5 pr-9 py-0 dee-only:px-4 dee-only:pl-2 flex items-center bg-[#f0ede4] rounded-full ">
            <Lottie animationData={dot} loop={true} className="w-14 dee-only:w-10 sm-only:w-12"/>
            <a href="#" className="dee-only:text-[.8rem]">
              Available For Work
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
