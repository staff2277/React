import React from "react";
import Lottie from "lottie-react";
import dot from  "../animations/dot4.json";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between pt-3 items-center h-[10%]">
        <div className="border-2">
          <p className="font-bold text-[1.15rem]">MUSTAPHA OSMAN</p>
          <p className="text-[.9rem] text-center">Front-End Developer</p>
        </div>
        <ul className="flex gap-14 items-center">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li className="pl-5 pr-9 py-0 flex items-center bg-[#f0ede4] rounded-full">
            <Lottie animationData={dot} loop={true} className="w-14"/>
            <a href="#" className="">
              Available For Work
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
