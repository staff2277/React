import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import video1 from "../assets/video1.mp4";

const Background = ({ playVideo, bgCount}) => {
  if (playVideo === true) {
    return (
      <div className="w-full h-screen z-[-1] fixed ">
        <video className="w-full h-fit" autoPlay muted loop>
          <source src={video1} type="video/mp4" />
        </video>
      </div>
    );
  } else if (bgCount === 0) {
    return (
      <div className="w-full h-screen z-[-1] fixed">
        <img className="w-full h-screen" src={image1} />
      </div>
    );
  } else if (bgCount === 1) {
    return (
      <div className="w-full h-screen z-[-1] fixed">
        <img className="w-full h-screen" src={image2} />
      </div>
    );
  } else if (bgCount === 2) {
    return (
      <div className="w-full h-screen z-[-1] fixed">
        <img className="w-full h-screen" src={image3} />
      </div>
    );
  }
};

export default Background;
