import checked from "/checked.svg";
import unchecked from "/unchecked.svg";
import close from "/close.svg";
import { useState } from "react";

const Input = () => {
  const [todo, setTodo] = useState("");
  const [todoArray, setTodoArray] = useState([]);
  const [checkedStatus, setCheckedStatus] = useState([]);
  const [nextId, setNextId] = useState(1);

  function trackChanges(event) {
    setTodo(event);
  }

  function addTodo(event) {
    event.preventDefault(); // Prevent the form from submitting

    if (todo.trim() === "") return; // Prevent adding empty items

    setTodoArray((prevState) => [...prevState, todo]);
    setTodo("");

    const newStatus = { id: nextId, img: unchecked };
    setCheckedStatus((prevState) => [...prevState, newStatus]);

    setNextId((prevState) => prevState + 1);
  }

  function toggleCheckedStatus(id) {
    setCheckedStatus((prevStatus) =>
      prevStatus.map((status) =>
        status.id === id
          ? { ...status, img: status.img === unchecked ? checked : unchecked }
          : status
      )
    );
  }

  return (
    <div className="flex justify-center flex-col max-md:w-[85%]">
      <form className="flex w-full justify-center" onSubmit={addTodo}>
        <input
          type="text"
          className="border-2 py-3 pl-2 w-full"
          value={todo}
          placeholder="What task will you like to do today?"
          onChange={(e) => trackChanges(e.target.value)}
        />
        <button type="submit" className="border-2 px-3 bg-blue-600 text-white">
          Submit
        </button>
      </form>
      {todoArray.map((value, index) => (
        <div
          key={checkedStatus[index].id}
          className="flex justify-center border-2 items-center"
        >
          <img
            src={checkedStatus[index].img}
            onClick={() => toggleCheckedStatus(checkedStatus[index].id)}
            alt=""
            className="w-[50px] cursor-pointer"
          />
          <p className="flex-auto">{value}</p>
          <img src={close} alt="" className="w-[50px]" />
        </div>
      ))}
    </div>
  );
};

export default Input;
