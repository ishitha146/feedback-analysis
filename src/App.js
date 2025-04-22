import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Fibonacci from './components/Fibonacci';
import './App.css';

function App() {
  const [users, setUsers] = useState([
    { username: 'ishitha', password: 'ishitha' },
  ]);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route
          path="/register"
          element={
            <Register users={users} setUsers={setUsers} setCurrentUser={setCurrentUser} />
          }
        />
        <Route
          path="/login"
          element={
            <Login users={users} setCurrentUser={setCurrentUser} />
          }
        />
        <Route
          path="/fibonacci"
          element={
            currentUser ? <Fibonacci /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
