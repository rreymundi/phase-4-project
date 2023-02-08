import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import ProjectsTable from './ProjectsTable';
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import NewProjectModal from './NewProjectModal';

const ProjectsPage = ({ 
    projects, 
    onAddProject, 
    onDeleteProject, 
    onUpdateProject 
  }) => {
  const [open, createProjectOpen] = useState(false);
  
  const handleOpen = () => createProjectOpen(true);
  
  let navigate = useNavigate();

  const handleClose = () => {
    navigate("/projects")
    createProjectOpen(false)
  };

  return (
    <Container>
        <h1>Projects page</h1>
        <Button 
          component={Link} 
          to="new" 
          onClick={handleOpen}>
          Create Project
        </Button>
        <ProjectsTable 
          projects={projects} 
          onDeleteProject={onDeleteProject} 
          onUpdateProject={onUpdateProject} 
        />
        <Routes>
          <Route 
            exact path='new' element={
              <NewProjectModal 
                open={open} 
                handleClose={handleClose} 
                onAddProject={onAddProject} 
              />} 
          />
        </Routes>
    </Container>
  )
}

export default ProjectsPage;