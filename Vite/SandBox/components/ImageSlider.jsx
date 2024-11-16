import { useEffect, useState } from "react";
import data from "../src/data";

const ImageSlider = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setTimeout(() => {
      setCount((prevcount) =>
        prevcount >= data.length - 1 ? 0 : prevcount + 1
      )
    }, 5000);

    return () => clearTimeout(interval);
  }, [count]);

  function handleLeft(){
    setCount((prevcount => prevcount - 1))
  }
  function handleRight(){
    setCount((prevcount => prevcount - 1))
  }

  return (
    <div className="border-2 border-black w-[600px] relative">
      <img src={data[count].img} alt="" />
      <div className="absolute bg-white rounded-full p-2 top-[45%]" onClick={handleLeft}>
        <img src="/left.svg" alt="" className="w-6" />
      </div>
      <div className="absolute bg-white rounded-full p-2 top-[45%] right-0" onClick={handleRight}>
        <img src="/right.svg" alt="" className="w-6" />
      </div>
      <div className="absolute bottom-5 left-[37%] flex">
        <div className="flex">
          {data.map((item, index) => (
            <div
              key={index}
              className={`p-[7px] mr-3 rounded-full ${count === index ? "bg-orange-600" : "bg-white "}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
