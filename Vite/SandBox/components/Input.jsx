import { useState } from "react";
import checked from "/checked.svg";
import unchecked from "/unchecked.svg";
import close from "/close.svg";

const Input = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [checkStatus, setCheckStatus] = useState(true);

  function addTodo() {
    if (input) {
      setTodos(() => [...todos, input]);
      setInput("");
    }
  }

  const [checkedStatusImg, setCheckedStatusImg] = useState(unchecked);

  
  let todoArray = todos.map((todo, index) => {
    function deleteTask(){
      setTodos(todos.filter((_,i)=>i !== index))
    }

    function toggleCheckedStatus(){
      setCheckStatus((prevstate)=> !prevstate)
      if(checkStatus){
        setCheckedStatusImg(() => checked)
      }else{
        setCheckedStatusImg(() => unchecked)
      }
    }
    return(    
    <div
      key={index}
      className="flex justify-between border-2 items-center py-3"
    >
      <img key={index} src={checkedStatusImg} alt="check" className="w-[50px]" onClick={toggleCheckedStatus}/>
      <span>{todo}</span>
      <img src={close} alt="close" className="w-[50px]" onClick={deleteTask}/>
    </div>
  )})

  return (
    <div className="min-w-[70%]">
      <div className="flex justify-center border-2">
        <input
          type="text"
          value={input}
          onChange={(change) => {
            setInput(() => change.target.value);
          }}
          placeholder="Type your task"
          className="border-2  px-[1rem] py-[12px] text-[1.4rem] rounded-2xl w-full"
        />
        <button className="border-2 text-[2.5rem] px-[30px]" onClick={addTodo}>
          +
        </button>
      </div>
      {todoArray}
    </div>
  );
};

export default Input;
