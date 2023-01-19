import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Content from "./components/Content";

export default function App() {
  const [user, setCurrentUser] = useState('');

  useEffect(() => {
    fetch('/auth')
    .then(r => {
      if (r.ok) {
        r.json()
        .then((r) => setCurrentUser(r))
      }
    })
  }, []);
  
  console.log(user)
  
  return (
    <Router>
      <NavBar user={user} />
      <Content onLogin={setCurrentUser} />
    </Router>
  );

}