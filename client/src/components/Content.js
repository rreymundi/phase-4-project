import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ProjectsPage from './ProjectsPage';
import MyTasksPage from './MyTasksPage';
import Completed from './Completed';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

const Content = ({ user, onLogin }) => {
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
          <Route path='/projects' element={<ProjectsPage projects={user.projects} />} />
          <Route path='/tasks' element={<MyTasksPage user={user} tasks={user.tasks} />} />
          <Route path='/completed' element={<Completed user={user} />} />
      </Routes>
      </Container>
    </Box>
  )
}

export default Content