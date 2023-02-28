import React, { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import { UserContext } from '../context/user';
import Home from './Home';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ProjectsPage from './ProjectsPage';
import TasksPage from './TasksPage';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import UnauthorizedPage from './UnauthorizedPage';

const Content = ({
  projects,
  setProjects,
  tasks,
  onLogin,
  onAddProject,
  onDeleteProject,
  onUpdateProject,
  onAddTask,
  onDeleteTask,
  onUpdateTask
  }) => {
    
  const {user} = useContext(UserContext);

  return (
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
                onLogin={onLogin}
                setProjects={setProjects}
              />} 
            />
            <Route path='/signup' element={
              <SignupPage 
                onLogin={onLogin} 
              />} 
            />
            <Route path='/projects/*' element={user
              ? <ProjectsPage 
                projects={projects}
                onAddProject={onAddProject} 
                onDeleteProject={onDeleteProject} 
                onUpdateProject={onUpdateProject}
                />
              : <UnauthorizedPage />
              } 
            />
            <Route path='/tasks/*' element={user
              ? <TasksPage 
                tasks={tasks} 
                projects={projects}
                onAddTask={onAddTask}
                onDeleteTask={onDeleteTask} 
                onUpdateTask={onUpdateTask} 
              />
              : <UnauthorizedPage />
              } 
            />
          </Routes>
        </Container>
      </Box>
  )
}

export default Content;