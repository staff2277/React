import { useState } from "react";
import data from "../src/data";

const Accordion = () => {
    
    const statusArray = data.map((value) => ({id: value.id, status: false}));

    const [accordionStatus, setAccordionStatus] = useState(statusArray);

  

  function toggleAccordion(id) {
    setAccordionStatus((prevstate => {
       return prevstate.map(item => (id === item.id ? {...item, status: !item.status} : item))
    }))
  }



  return (
    <>
      {data.map((value, index) => (
        <div key={index} className=" w-[500px]">
          <div
            onClick={() => toggleAccordion(value.id)}
            className="bg-black text-white flex justify-between items-center pl-2"
          >
            {value.title}
            <button className="text-[3rem] pr-5">+</button>
          </div>
          <div
            className={`bg-slate-500 pl-2 ${accordionStatus[index].status && "hidden"}`}
          >
            <h4 className="py-4">{value.title}</h4>
            <p className="pb-2">{value.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
