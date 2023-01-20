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
        r.json().then((user) => setCurrentUser(user))
      }
    })
  }, []);

  if(!user) console.log("You need to log in!")
  
  console.log(user)

  const handleLogout = () => {
    setCurrentUser(null)
  }
  
  return (
    <Router>
      <NavBar user={user} onLogout={handleLogout} />
      <Content onLogin={setCurrentUser} />
    </Router>
  );

}