import checked from "/checked.svg";
import unchecked from "/unchecked.svg";
import close from "/close.svg";
import { useState } from "react";

const Input = () => {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [id, setId] = useState(1);
  const [status, setStatus] = useState([]);

  function addTodo(event) {
    event.preventDefault();
    setTaskArray((prevstate) => [...prevstate, task]);
    setTask("");
    setStatus((prevstate) => [...prevstate, { id, img: unchecked }]);
    setId((prevstate) => prevstate + 1);
  }

  function toggleStatus(id) {
    status.map((item) => {
      if (item.id === id) {
        item.img === unchecked
          ? setStatus((prevstate) => [...prevstate, (item.img = checked)])
          : setStatus((prevstate) => [...prevstate, (item.img = unchecked)]);
      }
    });
  }

  function deleteTask(clickedTask) {
    let updateTaskArray = taskArray.filter((item) => item !== clickedTask);
    setTaskArray(updateTaskArray);
    console.log(updateTaskArray);
  }

  return (
    <div className="flex justify-center flex-col max-md:w-[85%]">
      <form className="flex w-full justify-center">
        <input
          type="text"
          onChange={(e) => {
            e.preventDefault();
            setTask(() => e.target.value);
          }}
          value={task}
          className="border-2 py-3 pl-2 w-full"
          placeholder="What task will you like to do today?"
        />
        <button
          onClick={addTodo}
          className="border-2 px-3 bg-blue-600 text-white"
        >
          Submit
        </button>
      </form>
      {taskArray.map((value, index) => (
        <div key={index} className="flex justify-center border-2 items-center">
          <img
            src={status[index].img}
            onClick={() => toggleStatus(status[index].id)}
            alt={"checked"}
            className="w-[50px] cursor-pointer"
          />
          <p className="flex-auto">{value}</p>
          <img
            src={close}
            onClick={() => deleteTask(value)}
            alt=""
            className="w-[50px]"
          />
        </div>
      ))}
    </div>
  );
};

export default Input;
