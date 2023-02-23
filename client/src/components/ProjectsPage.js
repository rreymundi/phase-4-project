import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import ProjectsTable from './ProjectsTable';
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import NewProjectModal from './NewProjectModal';

const ProjectsPage = ({
    user, 
    projects, 
    onAddProject, 
    onDeleteProject, 
    onUpdateProject,
    errors,
    setErrors,
  }) => {
  const [open, createProjectOpen] = useState(false);
  
  const handleOpen = () => createProjectOpen(true);
  
  let navigate = useNavigate();

  const handleClose = () => {
    navigate("/projects")
    createProjectOpen(false)
    setErrors([])
  };

  return (
    <Container>
        <Container sx={{ marginTop: '48px' }} >
          <h1>PROJECTS</h1>
        </Container>
        <Container sx={{ mb: 2, textAlign: 'right' }}>
          <Button 
            component={Link} 
            to="new" 
            onClick={handleOpen}
            variant="contained"
            >
            Create Project
          </Button>
        </Container>
        <Container>
          <ProjectsTable 
            user={user}
            projects={projects} 
            onDeleteProject={onDeleteProject} 
            onUpdateProject={onUpdateProject} 
            errors={errors}
            setErrors={setErrors}
          />
          <Routes>
            <Route exact path='new' element={
                <NewProjectModal
                  user={user}  
                  open={open} 
                  handleClose={handleClose} 
                  onAddProject={onAddProject}
                  errors={errors}
                  setErrors={setErrors} 
                />
              } 
            />
          </Routes>
        </Container>
    </Container>
  )
}

export default ProjectsPage;