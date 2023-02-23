import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function App() {
  const [user, setCurrentUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch('/auth')
    .then(r => {
      if (r.ok) {
        r.json()
        .then((user) => setCurrentUser(user))
        fetch('/projects')
        .then((r) => r.json())
        .then((r) => setProjects(r))
      } else {
        r.json().then((errorData) => setErrors(errorData.errors))
      }
    });
  }, []);

  const handleLogin = (loggedInUser) => {
    setCurrentUser(loggedInUser)
    setErrors([])
  };
  
  const handleLogout = () => {
    setCurrentUser(null)
    setProjects([])
    setErrors([])
  };

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject])
    setErrors([])
  };

  const handleDeleteProject = (deletedProject) => {
    const updatedProjects = projects.filter((project) => project.id !== deletedProject.id)
    const updatedTasks = user.tasks.filter((task) => task.project.id !== deletedProject.id)
    setProjects(updatedProjects)
    setCurrentUser({ ...user, tasks: updatedTasks })
  };

  const handleUpdateProject = (updatedProject) => {
    const updatedProjects = projects.map((project) => 
    project.id === updatedProject.id ? updatedProject : project
    )
    setProjects(updatedProjects)
    setErrors([])
  };

  const handleAddTask = (newTask) => {
    setCurrentUser({ ...user, tasks: [ ...user.tasks, newTask] })
    const updatedProjects = projects.map((project) => {
      if (project.id === newTask.project_id) {
        project.tasks.push(newTask)
        return project
      } else {
        return project
      }
    })
    setProjects(updatedProjects)
    setErrors([])
  };

  const handleDeleteTask = (deletedTask) => {
    const updatedTasks = user.tasks.filter((task) => 
      task.id !== deletedTask.id
      )
    const updatedProjects = projects.map((project) => {
      if (project.id === deletedTask.project_id) {
        const updatedProjectTasks = project.tasks.filter((task) =>
        task.id !== deletedTask.id
        )
        project.tasks = updatedProjectTasks
        return project
      } else {
        return project
      }
    })
    setCurrentUser({ ...user, tasks: updatedTasks })
    setProjects(updatedProjects)
  };

  const handleUpdateTask = (updatedTask) => {
    const updatedTasks = user.tasks.map((task) => 
      task.id === updatedTask.id ? updatedTask : task
    );
    const updatedProjects = projects.map((project) => {
      if (project.id === updatedTask.project_id) {
        const updatedProjectTasks = project.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
        )
        project.tasks = updatedProjectTasks
        return project
      } else {
        return project
      }
    })
    setCurrentUser({ ...user, tasks: updatedTasks })
    setProjects(updatedProjects)
    setErrors([])
  };

  if (!user) 
    return (
      <Router>
        <NavBar 
          errors={errors}
          setErrors={setErrors}
        />
        <Content 
          projects={projects}
          setProjects={setProjects}
          onLogin={handleLogin} 
          errors={errors}
          setErrors={setErrors}
        />
        <Footer />
      </Router>
    );
  
  return (
    <Router>
      <NavBar 
        user={user} 
        onLogout={handleLogout} 
        errors={errors}
        setErrors={setErrors}
      />
      <Content 
        user={user}
        tasks={user.tasks}
        projects={projects} 
        setProjects={setProjects}
        onLogin={handleLogin} 
        onAddProject={handleAddProject} 
        onDeleteProject={handleDeleteProject} 
        onUpdateProject={handleUpdateProject} 
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onUpdateTask={handleUpdateTask} 
        errors={errors}
        setErrors={setErrors}
      />
      <Footer />
    </Router>
  );

}