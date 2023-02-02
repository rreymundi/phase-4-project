import React from 'react';
import { Link } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const ProjectRow = ({ project }) => {
  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
      <TableCell component="th" scope="row">
        <Button>
          <StarBorderIcon fontSize='small'/>
        </Button>
      </TableCell>
      <TableCell component="th" scope="row">
        <Button component={ Link } to={`/projects/${project.id}/roadmap`} >
          <Typography>{project.name}</Typography>
        </Button>
      </TableCell>
      <TableCell align="right">
        <Typography>{project.description}</Typography>
      </TableCell>
      <TableCell align="right">
        <Button>
          <MoreHorizIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default ProjectRow