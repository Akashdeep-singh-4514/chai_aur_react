import React, { useState } from "react";
import { useTodo } from "../contexts/todocontext";

function TodoItems({ id, task, completed }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(task);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();
  const delTodo = () => {
    deleteTodo(id);
  };

  const editTodo = () => {
    updateTodo(id, { id, completed, task: todoMsg });
    setIsTodoEditable(false);
  };
  const toggleComp = () => {
    //console.log(todo.id);
    toggleComplete(id);
  };

  return (
    <>
      <div className="flex flex-wrap row" style={{ width: "560px" }}>
        <input
          style={{
            width: "15px",
            height: "15px",
            margin: "5px",
            marginTop: "10px",
          }}
          type="checkbox"
          className="cursor-pointer col-1"
          checked={completed}
          onChange={toggleComp}
        />

        <input
          type="text"
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
          className={`col-7 mx-1 rounded-2 ${
            !completed
              ? "bg-success text-light"
              : "bg-warning text-dark text-decoration-line-through "
          }`}
          style={{ width: "380px" }}
        />

        <button
          className="col-1 mx-1 bg-info"
          onClick={() => {
            if (completed) return;

            if (isTodoEditable) {
              editTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={completed}
          style={{ width: "50px" }}
        >
          {isTodoEditable ? "📁" : "✏️"}
        </button>
        <button
          type="button"
          onClick={delTodo}
          className="col-1 bg-info mx-1 "
          style={{ width: "50px" }}
        >
          ❌
        </button>
      </div>
    </>
  );
}

export default TodoItems;
