import { useState } from "react";
import data from "../src/data";

const ImageSlider = () => {
  const [image, setImage] = useState(data[0].img);
  let acc = 0;

  setInterval(() => {
    acc > data.length - 2 ? (acc = 0) : (acc = acc + 1);
    setImage(() => data[acc].img);
  }, 5000);

  return (
    <div className="border-2 border-black w-[600px] relative">
      <img src={image} alt="" />
      <div className="absolute bg-white rounded-full p-2 top-[45%]">
        <img src="/left.svg" alt="" className="w-6" />
      </div>
      <div className="absolute bg-white rounded-full p-2 top-[45%] right-0">
        <img src="/right.svg" alt="" className="w-6" />
      </div>
      <div className="absolute bottom-5 left-[35%] flex">
        {data.map((value, index) => (
          <div
            key={index}
            className="mr-5 border-2 border-white p-1 rounded-full bg-white"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
