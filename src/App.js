import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar.jsx";
import React from "react";
import MainContent from "./Component/MainContent";
import FloorWise from "./Component/FloorWise";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <MainContent />
    </React.Fragment>
  );
}

export default App;
