import React from "react";

const Navbar = () => {
  return (
    <div className="bg-transparent py-5 absolute w-full z-20">
      <nav className="flex justify-between items-center mx-28">
        <div className="flex">
          <img src="/images/logo.svg" alt="logo" className="w-11" />
          <img src="/images/StreamVibe.svg" alt="logotext" className="w-24" />
        </div>
        <div className="text-white flex gap-2 bg-[#111111] p-2 rounded-lg border-2 border-[#2c2c2c]">
          <button className="bg-[#252525] py-2 px-4 text-[0.83rem] rounded-md">Home</button>
          <button className="py-2 px-4 text-[0.83rem] rounded-md">Movies & Shows</button>
          <button className="py-2 px-4 text-[0.83rem] rounded-md">Support</button>
          <button className="py-2 px-4 text-[0.83rem] rounded-md">Subscriptions</button>
        </div>
        <div className="flex gap-7">
          <img src="/images/search.svg" alt="search" className="w-5" />
          <img src="/images/notification.svg" alt="notification" className="w-5" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
