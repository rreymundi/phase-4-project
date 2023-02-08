import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import ProjectRow from './ProjectRow';

const ProjectsTable = ({ 
    projects, 
    onDeleteProject, 
    onUpdateProject 
  }) => {

  const projectRows = projects?.map((project) => 
    <ProjectRow 
      key={project.name} 
      project={project} 
      onDeleteProject={onDeleteProject} 
      onUpdateProject={onUpdateProject} 
    />
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <Typography>Name</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography>Description</Typography>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projectRows}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProjectsTable;