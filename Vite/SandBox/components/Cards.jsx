import { useState } from "react";
import { useEffect } from "react";

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let fetchProduct = async () => {
      let response = await fetch("https://fakestoreapi.com/products");
      try {
        if (!response.ok) throw new Error("Unable to fetch data");
        const parsedData = await response.json();
        setData(parsedData);
        console.log(data);
      } catch (error) {
        console.log(`The error message is ${error}`);
      }
    };

    fetchProduct();
  }, []);

  return data.length > 0 && data.map((value, index) => (
    <div key={index} className="border-2 border-red-700 w-fit">
      <div className="w-[250px]">
        <img src={value.image} alt={value.description} />
      </div>
      <div className="flex justify-between pt-3">
        <p>{value.category}</p>
        <p>{value.price}</p>
      </div>
      <div className="flex justify-between pt-2">
        <p>{`${value.rating.count} left in stock`}</p>
        <p>{`Rating: ${value.rating.rate}`}</p>
      </div>
    </div>
  ));
};

export default Cards;
