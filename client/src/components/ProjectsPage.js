import React, { useState, useContext } from 'react';
import { ErrorContext } from '../context/error';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import ProjectsTable from './ProjectsTable';
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import NewProjectModal from './NewProjectModal';

const ProjectsPage = ({
    projects, 
    onAddProject, 
    onDeleteProject, 
    onUpdateProject,
  }) => {
    const {setErrors} = useContext(ErrorContext);
    const [open, createProjectOpen] = useState(false);
    const handleOpen = () => createProjectOpen(true);
  
    let navigate = useNavigate();

    const handleClose = () => {
      navigate("/projects")
      createProjectOpen(false)
      setErrors([])
    };

    return (
      <Container sx={{ paddingBottom: '48px'}}>
          <Container sx={{ marginTop: '48px' }} >
            <h1>MY PROJECTS</h1>
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
              onDeleteProject={onDeleteProject} 
              onUpdateProject={onUpdateProject}
            />
            <Routes>
              <Route exact path='new' element={
                  <NewProjectModal
                    open={open} 
                    handleClose={handleClose} 
                    onAddProject={onAddProject}
                  />
                } 
              />
            </Routes>
          </Container>
      </Container>
    )
  };

export default ProjectsPage;