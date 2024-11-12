import { useState } from "react";
import data from "../src/data";

const StarRating = () => {
  const [rating, setRating] = useState(data);

  function chooseRatings(id) {
    setRating((prevstate) => {
     return (prevstate.map((item) => {
        if (item.id <= id) {
          return { ...item, status: true };
        } else if(item.id > id){
          return { ...item, status: false }
        }
      }))
    });
    console.log(rating);
  }

  return (
    <div className="border-2 border-black text-center py-[60px] px-[50px] rounded-xl">
      <div>How was your experience</div>
      <ul className="flex mt-5">
        {rating.map((item, index) => {
          return (
            <li key={index} onMouseEnter={() => chooseRatings(item.id)}>
              <img
                src={item.status ? item.checked : item.unchecked}
                className="w-10 mr-4"
                alt=""
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StarRating;
