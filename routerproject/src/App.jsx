import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home.jsx";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
  <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />

  <Route
    path="/dashboard"
    element={
      <PrivateRoute isLoggedIn={isLoggedIn}>
        <Dashboard />
      </PrivateRoute>
    }
  />
</Routes>

    </div>
  );
}

export default App;
