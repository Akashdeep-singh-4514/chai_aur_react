import React, { useState } from "react";
import { useTodo } from "../contexts/todocontext";

function TodoForm() {
  const [newtask, setNewtask] = useState("");
  const { addTodo } = useTodo();
  return (
    <div>
      {" "}
      <input
        type="text"
        onChange={(e) => {
          setNewtask(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addTodo({ task: newtask, completed: false });
        }}
      >
        add
      </button>
    </div>
  );
}

export default TodoForm;
