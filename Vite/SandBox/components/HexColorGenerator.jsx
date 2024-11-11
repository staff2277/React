import { useState } from "react";

const HexColorGenerator = () => {
  const hexArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  
  const [hexCode, setHexCode] = useState(`#ffffff`);

  function toggleColors(){
    let acc = '';
    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * 16) 
      acc = acc + hexArray[randomNumber]
    }
    setHexCode('#' + acc)
  }

  return (
    <div className='border-2 w-full text-center py-[100px]' style={{backgroundColor: hexCode}}>
      <div className="my-5 text-[3rem]">{hexCode}</div>
      <button className="border-2 py-3 px-5" onClick={toggleColors}>Change Color</button>
    </div>
  );
};

export default HexColorGenerator;
