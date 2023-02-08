import React from 'react';
import { useNavigate } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ProjectMenu = ({ 
    project, 
    anchorProjectMenu,
    handleCloseProjectMenu, 
    onDeleteProject, 
    handleOpenEditProjectModal 
  }) => {
    
    let navigate = useNavigate();
    
    const handleDeleteProject = () => {
        navigate("/projects");
        fetch(`/projects/${project.id}`, {
          method: 'DELETE'
        })
        .then(onDeleteProject(project))
      };


    return (
        <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorProjectMenu}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorProjectMenu)}
              onClose={handleCloseProjectMenu}
              >
              <MenuItem onClick={handleCloseProjectMenu}>
                <Typography 
                  textAlign="center" 
                  onClick={handleOpenEditProjectModal} >
                  Edit
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseProjectMenu}>
                <Typography 
                  textAlign="center" 
                  onClick={handleDeleteProject} >
                  Delete
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
    )
}

export default ProjectMenu;