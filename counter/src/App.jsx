import { useState } from "react";

function App() {
  let [count, setCount] = useState(15);

  const addcount = () => {
    console.log("clicked ", count);
    count = count + 1;
    setCount(count);
  };
  const removecount = () => {
    console.log("clicked ", count);
    count = count - 1;
    setCount(count);
  };
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <button onClick={addcount}>add count</button>
        <br />
        <button onClick={removecount}>remove count</button>
      </div>
    </>
  );
}

export default App;
