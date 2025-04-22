import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Fibonacci from "./components/Fibonacci";
import "./App.css";

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isRegistered) return <Register onRegister={() => setIsRegistered(true)} />;
  if (!isLoggedIn) return <Login onLogin={() => setIsLoggedIn(true)} />;
  return <Fibonacci />;
}

export default App;
