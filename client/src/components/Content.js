import React, { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './Home';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ProjectsPage from './ProjectsPage';
import MyTasksPage from './MyTasksPage';
import Completed from './Completed';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import ProjectRoadmap from './ProjectRoadmap';

const Content = ({ user, onLogin, onAddProject, projects, onDeleteProject, onUpdateProject }) => {
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => setOpen(true);
  
  let navigate = useNavigate();

  const handleClose = () => {
    navigate("/projects")
    setOpen(false)
  };
  
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
          <Route path='/' element={<Home user={user} />} />
          <Route path='/login' element={<LoginPage onLogin={onLogin} />} />
          <Route path='/signup' element={<SignupPage onLogin={onLogin} />} />
          <Route path='/projects/*' element={<ProjectsPage projects={projects} open={open} handleOpen={handleOpen} handleClose={handleClose} onAddProject={onAddProject} onDeleteProject={onDeleteProject} onUpdateProject={onUpdateProject} />} />
          <Route path='/tasks/*' element={<MyTasksPage user={user} tasks={user.tasks} />} />
          <Route path='/completed' element={<Completed user={user} />} />      
          <Route exact path='/projects/:project_id/roadmap' element={<ProjectRoadmap />} />
        </Routes>
      </Container>
    </Box>
  )
}

export default Content