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
  const [tasks, setTasks] = useState([]);

    useEffect(() => {
      fetch('/auth')
      .then(r => {
        if (r.ok) {
          r.json()
          .then((user) => {
            setCurrentUser(user)
            setTasks(user.tasks)
          })
          fetch('/projects')
          .then((r) => r.json())
          .then((r) => setProjects(r))
        } else {
          r.json().then((errorData) => setErrors(errorData.errors))
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleLogin = (loggedInUser) => {
        setCurrentUser(loggedInUser)
        setTasks(loggedInUser.tasks)
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
        const updatedTasks = tasks.filter((task) => task.project.id !== deletedProject.id)
        setProjects(updatedProjects)
        setTasks(updatedTasks)
      };
    
      const handleUpdateProject = (updatedProject) => {
        const updatedProjects = projects.map((project) => 
        project.id === updatedProject.id ? updatedProject : project
        )
        const updatedTasks = tasks.map((task) => {
          if (task.project.id === updatedProject.id) {
            task.project = updatedProject
            return task
          } else {
            return task
          }
        })
        setProjects(updatedProjects)
        setTasks(updatedTasks)
        setErrors([])
      };
      
      const handleAddTask = (newTask) => {
        const updatedProjects = projects.map((project) => {
          if (project.id === newTask.project_id) {
            project.tasks.push(newTask)
            return project
          } else {
            return project
          }
        })
        setProjects(updatedProjects)
        setTasks([...tasks, newTask])
        setErrors([])
      };
    
      const handleDeleteTask = (deletedTask) => {
        const updatedTasks = tasks.filter((task) => 
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
        setTasks(updatedTasks)
        setProjects(updatedProjects)
      };
    
      const handleUpdateTask = (updatedTask) => {
        const updatedTasks = tasks.map((task) => 
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
        setTasks(updatedTasks)
        setProjects(updatedProjects)
        setErrors([])
      };  
      
      console.log(user)

  return (
    <Router>
      <NavBar onLogout={handleLogout} />
      <Content
        projects={projects}
        setProjects={setProjects}
        tasks={tasks}
        setTasks={setTasks}
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