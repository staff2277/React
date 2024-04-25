import React from "react";

const Counter = () => {
let [count, setCount] = React.useState(0)
  function handleClick() {
    setCount((prevstate) => prevstate += 1)
  }
  return (
    <div>
      <div>
        <button
          onClick={handleClick}
          className="bg-black text-white px-8 py-3 ml-10 mt-10"
        >
          +1
        </button>
      </div>
        <div>{count}</div>
    </div>
  );
};

export default Counter;
