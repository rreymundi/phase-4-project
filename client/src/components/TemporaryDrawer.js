import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const TemporaryDrawer = ({ drawerOpen, setDrawerOpen, user }) => {

  return (
    <Drawer 
      anchor='left' 
      open={drawerOpen} 
      onClose={() => setDrawerOpen(false)}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={() => setDrawerOpen(false)}
        onKeyDown={() => setDrawerOpen(false)}
        >
        <List>
          <ListItem disablePadding>
            <ListItemButton component={ Link } to='/projects/all'>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText>All Projects</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={ Link } to='/projects'>
              <ListItemIcon>
                <WorkOutlineIcon />
              </ListItemIcon>
              <ListItemText>My Projects</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={ Link } to='/tasks'>
              <ListItemIcon>
                <TaskAltIcon />
              </ListItemIcon>
              <ListItemText>My Tasks</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
  </Drawer>
  );
}

export default TemporaryDrawer;