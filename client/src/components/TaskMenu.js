import React from 'react';
import { useNavigate } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const TaskMenu = ({ 
    task, 
    anchorTaskMenu, 
    handleCloseTaskMenu, 
    onDeleteTask, 
    handleOpenEditTaskModal 
  }) => {
    
    let navigate = useNavigate();
    
    const handleDeleteTask = () => {
        navigate("/tasks");
        fetch(`/tasks/${task.id}`, {
          method: 'DELETE'
        })
        .then(onDeleteTask(task))
      };


    return (
        <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorTaskMenu}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorTaskMenu)}
              onClose={handleCloseTaskMenu}
                >
                <MenuItem onClick={handleCloseTaskMenu}>
                    <Typography 
                      textAlign="center" 
                      onClick={handleOpenEditTaskModal} 
                      >
                      Edit
                    </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseTaskMenu}>
                    <Typography 
                      textAlign="center" 
                      onClick={handleDeleteTask} 
                      >
                      Delete
                    </Typography>
                </MenuItem>
            </Menu>
          </Box>
    )
}

export default TaskMenu;