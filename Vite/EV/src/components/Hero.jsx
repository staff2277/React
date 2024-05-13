import React from "react";
import arrow_btn from "../assets/arrow_btn.png";
import play_icon from "../assets/play_icon.png";

const Hero = ({ playVideo, setPlayVideo, bgCount, setBgCount, heroData }) => {
  console.log(bgCount);
  function handleBgCount(num){
    setBgCount(num)
  }
  function handlePlayVideo(){
    setPlayVideo((prevState)=> !prevState)
  }
  return (
    <div className="mx-[7rem]">
      <div className="mt-[4.5rem]">
        <p className="text-[5rem]">{heroData.text1}</p>
        <p className="text-[5rem]">{heroData.text2}</p>
      </div>

      <button className="flex mt-[3rem] items-center bg-white text-black pl-[30px] pr-[10px] py-[5px] rounded-full">
        Explore the feartures{" "}
        <img
          src={arrow_btn}
          alt="arrow_image"
          className="w-[3.7rem] ml-[3.5rem]"
        />
      </button>
      <div className="flex justify-between items-center ">
        <ul className="flex text-[7rem] gap-4 items-center cursor-pointer">
          <li onClick={()=> handleBgCount(0)} className={bgCount === 0 && "text-orange-700"}>.</li>
          <li onClick={()=> handleBgCount(1)} className={bgCount === 1 && "text-orange-700"}>.</li>
          <li onClick={()=> handleBgCount(2)} className={bgCount === 2 && "text-orange-700"}>.</li>
        </ul>
        <div className="flex items-center cursor-pointer" onClick={() => handlePlayVideo()}>
          <div>
            <img src={play_icon} alt="play-icon" />
          </div>

          <p className="text-[1rem] ml-[2rem]">See the video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
