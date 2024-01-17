import React, { useState } from "react";
import { useTodo } from "../contexts/todocontext";

function TodoForm() {
  const [newtask, setNewtask] = useState("");
  const { addTodo } = useTodo();
  return (
    <div style={{ width: "500px" }}>
      <h1 className="text-capitalize text-light">to do list ...</h1>{" "}
      <input
        className="bg-success rounded-2 text-light p-2 "
        type="text"
        onChange={(e) => {
          setNewtask(e.target.value);
        }}
        style={{ width: "400px" }}
      />
      <button
        className="bg-info m-1"
        type="submit "
        onClick={(e) => {
          e.preventDefault();
          addTodo({ task: newtask, completed: false });
        }}
        style={{ width: "80px" }}
      >
        add
      </button>
    </div>
  );
}

export default TodoForm;
