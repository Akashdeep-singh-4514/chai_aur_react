import React from "react";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import UserContextProvider from "./context/userContextProvider";
function App() {
  return (
    <UserContextProvider>
      <h1 style={{ marginLeft: 50 }}>context API </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
