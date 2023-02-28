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
            setProjects(user.projects)
            setTasks(user.tasks)
          })
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const handleLogin = (loggedInUser) => {
        setCurrentUser(loggedInUser)
        setProjects(loggedInUser.projects)
        setTasks(loggedInUser.tasks)
        setErrors([])
      };

      const handleLogout = () => {
        setCurrentUser(null)
        setErrors([])
      };
    
      const handleAddProject = (newProject) => {
        setProjects([...projects, newProject])
        setErrors([])
      };
    
      const handleDeleteProject = (deletedProject) => {
        const updatedProjects = projects.filter((project) => project.id !== deletedProject.id)
        setProjects(updatedProjects)
      };
    
      const handleUpdateProject = (updatedProject) => {
        const updatedProjects = projects.map((project) => 
        project.id === updatedProject.id ? updatedProject : project
        )
        const updatedTasks = user.tasks.map((task) => {
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
        // const updatedProjects = projects.map((project) => {
        //   if (project.id === newTask.project_id) {
        //     project.tasks.push(newTask)
        //     return project
        //   } else {
        //     return project
        //   }
        // })
        // setProjects(updatedProjects)
        setTasks([...tasks, newTask])
        setErrors([])
      };
    
      const handleDeleteTask = (deletedTask) => {
        const updatedTasks = tasks.filter((task) => 
          task.id !== deletedTask.id
          )
        // const updatedProjects = projects.map((project) => {
        //   if (project.id === deletedTask.project_id) {
        //     const updatedProjectTasks = project.tasks.filter((task) =>
        //     task.id !== deletedTask.id
        //     )
        //     project.tasks = updatedProjectTasks
        //     return project
        //   } else {
        //     return project
        //   }
        // })
        // setCurrentUser({ ...user, tasks: updatedTasks })
        // setProjects(updatedProjects)
        setTasks(updatedTasks)
      };
    
      const handleUpdateTask = (updatedTask) => {
        const updatedTasks = tasks.map((task) => 
          task.id === updatedTask.id ? updatedTask : task
        );
        // const updatedProjects = projects.map((project) => {
        //   if (project.id === updatedTask.project_id) {
        //     const updatedProjectTasks = project.tasks.map((task) =>
        //     task.id === updatedTask.id ? updatedTask : task
        //     )
        //     project.tasks = updatedProjectTasks
        //     return project
        //   } else {
        //     return project
        //   }
        // })
        // setCurrentUser({ ...user, tasks: updatedTasks })
        // setProjects(updatedProjects)
        setTasks(updatedTasks)
        setErrors([])
      };  
      console.log(user)
      
  return (
    <Router>
      <NavBar onLogout={handleLogout} />
      <Content
        projects={projects}
        tasks={tasks}
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