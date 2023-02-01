import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import ProjectsTable from './ProjectsTable';
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import NewProjectModal from './NewProjectModal';

const ProjectsPage = ({ projects }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  let navigate = useNavigate();
  const handleClose = () => {
    navigate("/projects")
    setOpen(false)
  };

  return (
    <Container>
        <h1>Projects page</h1>
        <Button component={Link} to="/projects/new" onClick={handleOpen}>Create Project</Button>
        <ProjectsTable projects={projects} />
        <NewProjectModal open={open} handleClose={handleClose} />
    </Container>
  )
}

export default ProjectsPage;