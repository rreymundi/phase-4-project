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
          fetch('/projects')
          .then((r) => r.json())
          .then((r) => setAllProjects(r))
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
        // const updatedProjects = user.projects.push(newProject)
        setCurrentUser({ ...user, projects: [...user.projects, newProject] })
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
          const projectToUpdate = allProjects.find(
            project => project.id === newTask.project.id
            );
          const updatedProject = {...projectToUpdate, tasks: [...projectToUpdate.tasks, newTask]}
          const updatedAllProjects = allProjects.map((project) => 
            project.id === newTask.project.id ? updatedProject : project
          );
            if (user.projects.length < 1) {
              const updatedProjects = [...user.projects, updatedProject]
              setCurrentUser({ ...user, projects: updatedProjects, tasks: [...user.tasks, newTask] });
            } else {
              const projectExists = user.projects.includes(projectToUpdate)
              if (!projectExists) {
                const updatedProjects = [...user.projects, updatedProject]
                setCurrentUser({ ...user, projects: updatedProjects, tasks: [...user.tasks, newTask] });
              } else {
                const updatedProjects = user.projects.map((project) => 
                  project.id === newTask.project.id ? updatedProject : project
                );
              setCurrentUser({ ...user, projects: updatedProjects, tasks: [...user.tasks, newTask] });
              }
            };
          setAllProjects(updatedAllProjects)
          setErrors([]);
        };
            
      const handleDeleteTask = (deletedTask) => {
        const updatedTasks = user.tasks.filter((task) => 
          task.id !== deletedTask.id
        );
        const projectToUpdate = allProjects.find(
          project => project.id === deletedTask.project.id
        );
        const filteredTasks = projectToUpdate.tasks.filter((task) => 
          task.id !== deletedTask.id
        );
        const updatedProject = {...projectToUpdate, tasks: filteredTasks}
          // OK UP TO THIS POINT!
        const updatedAllProjects = allProjects.map((project) => 
            project.id === deletedTask.project.id ? updatedProject : project
        );
        const updatedUserProjects = user.projects.filter((project) => 
          project.id !== deletedTask.project.id && project.tasks.length !== 1
        );
        setCurrentUser({ ...user, projects: updatedUserProjects, tasks: updatedTasks });
        setAllProjects(updatedAllProjects);
      };

      const handleUpdateTask = (updatedTask) => {
        const updatedTasks = user.tasks.map((task) => 
          task.id === updatedTask.id ? updatedTask : task
        );
        const projectToUpdate = allProjects.find(
          project => project.id === updatedTask.project.id
        );
        const updatedProjectTasks = projectToUpdate.tasks.map((task) =>
        // Need to figure out: if the task exists then update it, 
        // if not, then add it (this second condition only if i allow editing the task project). 
          task.id === updatedTask.id ? updatedTask : task
        );
        const updatedProject = {...projectToUpdate, tasks: updatedProjectTasks}
        const updatedAllProjects = allProjects.map((project) => 
            project.id === updatedTask.project.id ? updatedProject : project
        );
        const updatedUserProjects = user.projects.map((project) =>
          project.id === updatedTask.project.id ? updatedProject : project
        );
        setCurrentUser({ ...user, projects: updatedUserProjects, tasks: updatedTasks });
        setAllProjects(updatedAllProjects);
        setErrors([]);
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