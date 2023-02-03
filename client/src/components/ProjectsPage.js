import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProjectsTable from './ProjectsTable';
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import NewProjectModal from './NewProjectModal';

const ProjectsPage = ({ projects, open, handleOpen, handleClose, onAddProject }) => {

  return (
    <Container>
        <h1>Projects page</h1>
        <Button component={Link} to="new" onClick={handleOpen}>Create Project</Button>
        <ProjectsTable projects={projects} />
        <Routes>
          <Route exact path='new' element={<NewProjectModal open={open} handleClose={handleClose} onAddProject={onAddProject} />} />
        </Routes>
    </Container>
  )
}

export default ProjectsPage;