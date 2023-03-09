import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
function App() {
  return (
    <div className="bg-dark text-white App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
