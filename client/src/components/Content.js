import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ProjectsPage from './ProjectsPage';
import TasksPage from './TasksPage';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

const Content = ({ 
    user, 
    tasks, 
    onLogin, 
    projects, 
    onAddProject, 
    onDeleteProject, 
    onUpdateProject, 
    onAddTask, 
    onDeleteTask, 
    onUpdateTask, 
    errors,
    setErrors
  }) => {
  
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
          <Route path='/login' element={
            <LoginPage 
              onLogin={onLogin}
              errors={errors}
              setErrors={setErrors} 
            />} 
          />
          <Route path='/signup' element={
            <SignupPage 
              onLogin={onLogin} 
              errors={errors}
              setErrors={setErrors} 
            />} 
          />
          <Route path='/projects/*' element={
            <ProjectsPage 
              projects={projects} 
              onAddProject={onAddProject} 
              onDeleteProject={onDeleteProject} 
              onUpdateProject={onUpdateProject}
              errors={errors}
              setErrors={setErrors}  
            />} 
          />
          <Route path='/tasks/*' element={
            <TasksPage 
              user={user} 
              projects={projects} 
              tasks={tasks} 
              onAddTask={onAddTask}
              onDeleteTask={onDeleteTask} 
              onUpdateTask={onUpdateTask} 
            />} 
          />
        </Routes>
      </Container>
    </Box>
  )
}

export default Content;