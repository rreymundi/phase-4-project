import React from 'react';
import { useNavigate } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

const ProjectMenu = ({ project, anchorProjectMenu, handleCloseProjectMenu, handleOpenProjectMenu, onDeleteProject }) => {
    
    const handleDeleteProject = () => {
        navigate("/projects");
        fetch(`/projects/${project.id}`, {
          method: 'DELETE'
        })
        .then(onDeleteProject(project))
      };

    let navigate = useNavigate();

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
                  <Typography textAlign="center" onClick={handleDeleteProject} >Delete</Typography>
                </MenuItem>
            </Menu>
          </Box>
    )
}

export default ProjectMenu;