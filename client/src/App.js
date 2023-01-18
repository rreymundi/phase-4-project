import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Content from "./components/Content";

export default function App() {

  return (
    <Router>
      <NavBar />
      <Content />
    </Router>
  );

}