import React, { useContext } from 'react';
import { UserContext } from '../context/user';
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
    onDeleteProject, 
    onUpdateProject,
  }) => {

  const {user} = useContext(UserContext);

  // const sortedProjects = user.projects.sort((a, b) => {
  //   const nameA = a.name.toUpperCase();
  //   const nameB = b.name.toUpperCase();
  //   if (nameA < nameB) {
  //     return -1;
  //   }
  //   if (nameA > nameB) {
  //     return 1;
  //   }
  //   return 0;
  // });


  // const projectRows = user.projects?.map((project) => (
  //     <ProjectRow 
  //       key={project.id} 
  //       project={project} 
  //       onDeleteProject={onDeleteProject} 
  //       onUpdateProject={onUpdateProject}
  //     />
  //   )
  // );

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
        {user.projects.map((project) => {
              return (
                <ProjectRow 
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

export default ProjectsTable;