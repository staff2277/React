import { useState } from "react";

const HexColorGenerator = () => {
  const [hexCode, setHexCode] = useState("#555");
  const [bgColor, setBgColor] = useState("bg-[#555]");

  function toggleColors(){
    console.log(Math.random());
    
  }

  return (
    <div className={`border-2 w-full text-center py-[100px] ${bgColor}`}>
      <div className="my-5 text-[3rem]">{hexCode}</div>
      <button className="border-2 py-3 px-5" onClick={toggleColors}>Change Color</button>
    </div>
  );
};

export default HexColorGenerator;
