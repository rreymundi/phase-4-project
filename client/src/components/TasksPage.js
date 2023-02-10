import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import NestedGrid from './NestedGrid';
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import NewTaskModal from './NewTaskModal';

const TasksPage = ({ 
    user, 
    tasks, 
    projects, 
    onAddTask, 
    onDeleteTask, 
    onUpdateTask 
  }) => {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(true);
  
  let navigate = useNavigate();
 
  const handleClose = () => {
    navigate("/tasks")
    setOpen(false)
  };

  return (
    <Container>
      <h1>My tasks</h1>
      <Container sx={{ mb: 2 }}>
        <Button 
          component={Link} to="new" 
          onClick={handleOpen} 
          >
          Create Task
        </Button>
      </Container>
      <Container>
        <NestedGrid 
          user={user} 
          tasks={tasks} 
          onDeleteTask={onDeleteTask} 
          projects={projects} 
          onUpdateTask={onUpdateTask} 
        />
        <Routes>
          <Route exact path='new' element={
            <NewTaskModal 
              user={user} 
              open={open} 
              projects={projects} 
              handleClose={handleClose} 
              onAddTask={onAddTask} />} 
          />
        </Routes>
      </Container>
    </Container>
  )
}

export default TasksPage;