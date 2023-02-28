import React, { useState, useContext } from 'react';
import { ErrorContext } from '../context/error';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import NestedGrid from './NestedGrid';
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import NewTaskModal from './NewTaskModal';

const TasksPage = ({ 
    tasks, 
    allProjects, 
    onAddTask, 
    onDeleteTask, 
    onUpdateTask,
  }) => {
    const {setErrors} = useContext(ErrorContext);
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => setOpen(true);
    
    let navigate = useNavigate();
  
    const handleClose = () => {
      navigate("/tasks")
      setOpen(false)
      setErrors([])
    };

  return (
    <Container sx={{ paddingBottom: '48px'}}>
      <Container sx={{ marginTop: '48px' }} >
        <h1>MY TASKS</h1>
      </Container>
      <Container sx={{ mb: 2, textAlign: 'right' }}>
        <Button 
          component={Link} 
          to="new" 
          onClick={handleOpen} 
          variant="contained"
          >
          Create Task
        </Button>
      </Container>
      <Container>
        <NestedGrid 
          tasks={tasks} 
          onDeleteTask={onDeleteTask} 
          projects={allProjects} 
          onUpdateTask={onUpdateTask} 
        />
        <Routes>
          <Route exact path='new' element={
            <NewTaskModal 
              open={open} 
              projects={allProjects} 
              handleClose={handleClose} 
              onAddTask={onAddTask} 
            />} 
          />
        </Routes>
      </Container>
    </Container>
  )
}

export default TasksPage;