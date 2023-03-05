import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import AllProjectsRow from './AllProjectsRow';

const AllProjectsTable = ({
    allProjects,
    onDeleteProject, 
    onUpdateProject,
  }) => {
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
            </TableCell>
            <TableCell align="left">
              <Typography sx={{ fontWeight: 'bold' }}>Name</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography sx={{ fontWeight: 'bold' }}>Description</Typography>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {allProjects.map((project) => {
              return (
                <AllProjectsRow 
                  key={project.id} 
                  project={project} 
                  onDeleteProject={onDeleteProject} 
                  onUpdateProject={onUpdateProject}
                />
              )
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllProjectsTable;