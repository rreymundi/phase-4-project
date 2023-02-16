import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import ProjectMenu from './ProjectMenu';
import EditProjectModal from './EditProjectModal';
import ProjectRoadmap from './ProjectRoadmap';

const ProjectRow = ({ project, onDeleteProject, onUpdateProject }) => {
  const [anchorProjectMenu, setAnchorProjectMenu] = React.useState(null);
  const [open, setEditProjectOpen] = useState(false);
  const [roadmapOpen, setRoadmapOpen] = useState(false)
  
  let navigate = useNavigate();
  
  const handleOpenEditProjectModal = () => setEditProjectOpen(true);
  const handleCloseEditProjectModal = () => {
    navigate("/projects")
    setEditProjectOpen(false)
  };

  const handleOpenProjectMenu = (event) => {
    setAnchorProjectMenu(event.currentTarget);
  };
  const handleCloseProjectMenu = () => {
    setAnchorProjectMenu(null);
  };

  const handleOpenRoadmap = () => setRoadmapOpen(true);
  const handleCloseRoadmap = () => {
    navigate("/projects")
    setRoadmapOpen(false)
  };


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
        <Button 
          component={ Link } 
          to={`/projects/${project.id}`} 
          onClick={handleOpenRoadmap} >
          <Typography>{project.name}</Typography>
        </Button>
      </TableCell>
      <TableCell align="right">
        <Typography>{project.description}</Typography>
      </TableCell>
      <TableCell align="right">
        <Button 
          component={ Link } 
          to={`/projects/${project.id}/edit`} 
          onClick={handleOpenProjectMenu} >
          <MoreHorizIcon />
        </Button>
          <ProjectMenu 
            anchorProjectMenu={anchorProjectMenu} 
            handleCloseProjectMenu={handleCloseProjectMenu} 
            handleOpenProjectMenu={handleOpenProjectMenu} 
            project={project} 
            onDeleteProject={onDeleteProject} 
            handleOpenEditProjectModal={handleOpenEditProjectModal} 
          />
      </TableCell>
      <EditProjectModal 
        open={open} 
        handleClose={handleCloseEditProjectModal} 
        project={project} 
        onUpdateProject={onUpdateProject} 
      />
      <ProjectRoadmap 
        open={roadmapOpen} 
        project={project} 
        tasks={project.tasks}
        handleClose={handleCloseRoadmap} 
      />
    </TableRow>
  )
}

export default ProjectRow;