import { useState } from "react";
import { TodoProvider } from "./contexts/todocontext";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo = { task: "task", completed: false }) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    console.log(todos);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem("todos"));

  //   if (todos && todos.length > 0) {
  //     setTodos(todos);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  return (
    <TodoProvider
      value={{ addTodo, deleteTodo, toggleComplete, todos, updateTodo }}
    >
      <div className="" style={{ width: "500px" }}>
        <TodoForm />
        <div className="flex flex-wrap ">
          {/*Loop and Add TodoItem here */}
          {todos.map((todo) => (
            <div key={todo.id} className="w-full">
              <TodoItems
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
              />
            </div>
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
