import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"
        style={{ height: 800 }}
      >
        <div
          className="flex flex-wrap-reverse justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl "
          style={{
            marginLeft: 400,
            paddingTop: 100,
            justifyContent: "space-around",
          }}
        >
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red", marginLeft: 50 }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green", marginLeft: 50 }}
          >
            green
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive", marginLeft: 50 }}
          >
            olive
          </button>
          <button
            onClick={() => setColor("grey")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "grey", marginLeft: 50 }}
          >
            grey
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue", marginLeft: 50 }}
          >
            blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
