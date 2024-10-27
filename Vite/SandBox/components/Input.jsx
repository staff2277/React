import { useState } from "react";
import checked from "/checked.svg";
import unchecked from "/unchecked.svg";
import close from "/close.svg";

const Input = () => {
  let input = document.getElementById("input");

  const [todo, setTodo] = useState("");



  function addTodo() {
    setTodo(input.value)
    console.log(input.value);
  }

  return (
    <div className="min-w-[70%]">
      <div className="flex justify-center border-2">
        <input
          type="text"
          placeholder="Type your task"
          className="border-2  px-[1rem] py-[12px] text-[1.4rem] rounded-2xl w-full"
        />
        <button className="border-2 text-[2.5rem] px-[30px]" onClick={addTodo}>
          +
        </button>
        
      </div>
      <div className="flex justify-between border-2 items-center py-3">
          <img src={checked} alt="check" className="w-[50px]" />
          <span>asaa</span>
          <img src={close} alt="close" className="w-[50px]" />
        </div>
    </div>
  );
};

export default Input;
