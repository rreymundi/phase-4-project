import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from '../context/user';
import { ErrorContext } from '../context/error';
import Home from './Home';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ProjectsPage from './ProjectsPage';
import TasksPage from './TasksPage';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import UnauthorizedPage from './UnauthorizedPage';
import NavBar from './NavBar';
import Footer from './Footer';

const Content = () => {
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
      <Box 
        component='main'
        sx={{
            height: '100vh',
            overflow: 'auto',
            display: 'flex',
            flexFlow: 'row nowrap',
            overflowX: 'scroll'
        }}
        >
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={
              <LoginPage 
                onLogin={handleLogin}
                projects={projects}
                setProjects={setProjects}
              />} 
            />
            <Route path='/signup' element={
              <SignupPage 
                onLogin={handleLogin} 
              />} 
            />
            <Route path='/projects/*' element={user
              ? <ProjectsPage 
                onAddProject={handleAddProject} 
                onDeleteProject={handleDeleteProject} 
                onUpdateProject={handleUpdateProject}
                />
              : <UnauthorizedPage />
              } 
            />
            <Route path='/tasks/*' element={user
              ? <TasksPage 
                projects={projects} 
                tasks={user.tasks} 
                onAddTask={handleAddTask}
                onDeleteTask={handleDeleteTask} 
                onUpdateTask={handleUpdateTask} 
              />
              : <UnauthorizedPage />
              } 
            />
          </Routes>
        </Container>
      </Box>
      <Footer />
    </Router>
  )
}

export default Content;