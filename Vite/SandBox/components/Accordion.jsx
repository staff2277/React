import { useState } from "react";
import data from "../src/data";
const Accordion = () => {
  let accordionArray = data.map((item) => ({ id: item.id, status: false }));
  const [accordion, setAccordion] = useState(accordionArray);

  function toggleAccordion(id) {
    setAccordion((prevstate) =>
      prevstate.map((item) => id === item.id ? { ...item, status: !item.status } : {...item, status: false}))
    
  }

  return (
    <>
      {data.map((value, index) => (
        <div key={value.id} className="w-[500px] h-auto">
          <div
            onClick={() => toggleAccordion(value.id)}
            className="flex justify-between items-center bg-teal-700 text-white pl-3 pr-3 py-2 border-b-[1px] border-b-white"
          >
            <p>{value.title}</p>
            <button className="text-[2rem]">+</button>
          </div>
          <div
            className={`border-x-[1px] border-x-teal-700 pl-2 ${
              accordion[index].status ? "block" : "hidden"
            }`}
          >
            <p className="py-3">{value.title}</p>
            <p className="py-3">{value.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
