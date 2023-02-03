import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Content from "./components/Content";

export default function App() {
  const [user, setCurrentUser] = useState('');
  const [projects, setProjects] = useState([])

  
  useEffect(() => {
    fetch('/auth')
    .then(r => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user))
      }
    })
  }, []);

  useEffect(() => {
    fetch('/projects')
    .then((r) => r.json())
    .then((r) => setProjects(r))
  })

  const handleLogout = () => {
    setCurrentUser(null)
  }

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject])
  }
  
  return (
    <Router>
      <NavBar user={user} onLogout={handleLogout} />
      <Content user={user} onLogin={setCurrentUser} onAddProject={handleAddProject} projects={projects} />
    </Router>
  );

}