import { useState } from "react";
import useLocalStorage from "use-local-storage";
import "./App.css";
function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  return (
    <>
      <div
        className={`card shadow-lg border-4 p-5 justify-content-center bg-${theme}`}
        style={{ width: "350px" }}
      >
        <h3
          className={`text-center  text-${
            theme === "light" ? "dark" : "light"
          }`}
        >
          Login form
        </h3>

        <form action="" className="form justify-content-center ">
          <div>
            <input
              className={`p-1 m-2 w-100 bg-${theme}`}
              type="text"
              name="username"
              placeholder="username"
            />
            <input
              className={`p-1 m-2 w-100 bg-${theme}`}
              type="password"
              name="password"
              placeholder="password"
            />
          </div>
          <div
            className="form-check d-flex justify-content-start mb-4"
            style={{ marginLeft: "10px" }}
          >
            <input className="form-check-input " type="checkbox" value="" />
            <label
              className={`form-check-label text-${
                theme === "light" ? "dark" : "light"
              }`}
            >
              {" "}
              Remember password{" "}
            </label>
          </div>
          <button
            className={`text-center bg-primary w-75  rounded-2 text-capitalize ${
              theme === "light" ? "bg-info" : "bg-primary"
            }`}
            style={{ marginLeft: 30 }}
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            login{" "}
          </button>
          <br />
          <br />
          <div
            style={{ marginLeft: "26px" }}
            className="flex flex-wrap flex-row row "
          >
            <div className="col-2">
              <input
                id="toggle"
                className="form-check-input checkbox"
                type="checkbox"
                value=""
                onChange={(e) => {
                  const ischecked = e.currentTarget.checked;

                  const newTheme = ischecked ? "dark" : "light";
                  setTheme(newTheme);
                }}
              />
              <label for="toggle" class="switch"></label>
            </div>
            <div className="col-10">
              <p
                className={`form-check-label mx-1  text-${
                  theme === "light" ? "dark" : "light"
                }`}
              >
                dark theme
              </p>
            </div>
          </div>
        </form>
        <br />
      </div>
    </>
  );
}

export default App;
