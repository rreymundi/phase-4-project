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
  const [allProjects, setAllProjects] = useState([]);

    useEffect(() => {
      fetch('/auth')
      .then(r => {
        if (r.ok) {
          r.json()
          .then((user) => {
            setCurrentUser(user)
          })
        } else {
          r.json().then((errorData) => setErrors(errorData.errors))
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
        setErrors([])
      };
    
      const handleAddProject = (newProject) => {
        const updatedProjects = user.projects.push(newProject)
        setCurrentUser({ ...user, projects: updatedProjects })
        setAllProjects([...allProjects, newProject])       
        setErrors([])
      };
    
      const handleDeleteProject = (deletedProject) => {
        const updatedProjects = user.projects.filter((project) => 
          project.id !== deletedProject.id
        )
        setCurrentUser({ ...user, projects: updatedProjects })        
      };
    
      const handleUpdateProject = (updatedProject) => {
        const updatedProjects = user.projects.map((project) => 
        project.id === updatedProject.id ? updatedProject : project
        )
        setCurrentUser({ ...user, projects: updatedProjects })
        setErrors([])
      };

      const handleAddTask = (newTask) => {
          const updatedTasks = user.tasks.push(newTask)
          const updatedProjects = user.projects.map((project) => {
            if (project.id === newTask.project.id) {
              const updatedProject = project.tasks.push(newTask)
              return updatedProject
            } else {
              return project
            }
          })
          setCurrentUser({ ...user, projects: updatedProjects, tasks: updatedTasks })        
          setErrors([])
        };
            
      const handleDeleteTask = (deletedTask) => {
        const updatedTasks = user.tasks.filter((task) => 
          task.id !== deletedTask.id
        )
        const updatedProjects = user.projects.map((project) => {
          if (project.id === deletedTask.project.id) {
            const updatedProject = project.tasks.filter((task) =>
              task.id !== deletedTask.id
            )
            return updatedProject
          } else {
            return project
          }
        })
        setCurrentUser({ ...user, projects: updatedProjects, tasks: updatedTasks })
      };
    
      const handleUpdateTask = (updatedTask) => {
        const updatedTasks = user.tasks.map((task) => 
        task.id === updatedTask.id ? updatedTask : task
        )
        setCurrentUser({ ...user, tasks: updatedTasks })
        setErrors([])
      };  
      
  return (
    <Router>
      <NavBar onLogout={handleLogout} />
      <Content
        allProjects={allProjects}
        setAllProjects={setAllProjects}
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