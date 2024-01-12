import React, { useContext, useState } from "react";
import userContext from "../../context/userContext";
function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(userContext);
  const handlesubmit = (e) => {
    e.preventDefault();
    setUser({ name, password });
  };
  return (
    <div style={{ marginLeft: 50 }}>
      <input
        type="text"
        name="name"
        id=""
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        name="password"
        id=""
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit" onClick={handlesubmit}>
        submit
      </button>
    </div>
  );
}

export default Login;
