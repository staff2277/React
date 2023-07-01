import React from "react";
import car1 from "./images/car.webp";  
import car3 from "./images/car3.webp";
import car4 from "./images/car4.jpeg";
import car6 from "./images/car6.jpeg";
import car7 from "./images/car7.jpeg";
import car8 from "./images/car8.jpeg";
import car9 from "./images/car9.jpeg";

const Grids = () => {
  const images = [car1, car3, car4, car6, car7, car8, car9];

  return (
    <div className="wrapper">
      {images.map((image, index) => (
        <div className="boxes" key={index}>
          <img src={image} alt="" className="image" />
        </div>
      ))}
    </div>
  );
};

export default Grids;
