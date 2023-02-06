import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import NestedGrid from './NestedGrid';
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import NewTaskModal from './NewTaskModal';

const TasksPage = ({ user, tasks, projects, onAddTask }) => {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(true);
  
  let navigate = useNavigate();
 
  const handleClose = () => {
    navigate("/tasks")
    setOpen(false)
  };

  return (
    <Container>
      <h1>My Tasks</h1>
      <Button component={Link} to="new" onClick={handleOpen}>Create Task</Button>
      <NestedGrid tasks={tasks} />
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
  )
}

export default TasksPage;