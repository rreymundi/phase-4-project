import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './context/user';
import { ErrorContext } from './context/error';
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./components/Content";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {

  const {user, setCurrentUser} = useContext(UserContext);
  const {setErrors} = useContext(ErrorContext);
  const [projects, setProjects] = useState([]);
  
    useEffect(() => {
      fetch('/auth')
      .then(r => {
        if (r.ok) {
          r.json()
          .then((user) => setCurrentUser(user))
          fetch('/projects')
          .then((r) => r.json())
          .then((r) => setProjects(r))
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        const updatedTasks = user.tasks.map((task) => {
          if (task.project.id === updatedProject.id) {
            task.project = updatedProject
            return task
          } else {
            return task
          }
        })
        setCurrentUser({ ...user, tasks: updatedTasks })
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
  
  return (
    <Router>
      <NavBar onLogout={handleLogout} />
      <Content
        projects={projects}
        setProjects={setProjects}
        onLogin={handleLogin} 
        onAddProject={handleAddProject}
        onDeleteProject={handleDeleteProject}
        onUpdateProject={handleUpdateProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onUpdateTask={handleUpdateTask}
      /> 
      <Footer />
    </Router>
  )

};