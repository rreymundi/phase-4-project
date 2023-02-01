import React from 'react';
import ProjectsTable from './ProjectsTable';
import { Container } from '@mui/system';

const ProjectsPage = ({ projects }) => {

  return (
    <Container>
        <h1>Projects page</h1>
        <ProjectsTable projects={projects} />
    </Container>
  )
}

export default ProjectsPage