import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ListIcon from '@mui/icons-material/List';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function TemporaryDrawer({ drawerOpen, setDrawerOpen }) {

  return (
    <Drawer anchor='left' open={drawerOpen} onClose={() => setDrawerOpen(false)}>
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setDrawerOpen(false)}
      onKeyDown={() => setDrawerOpen(false)}
      >
      <List>
        <ListItem disablePadding>
          <ListItemButton component={ Link } to='/lists'>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText>My lists</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={ Link } to='/important'>
            <ListItemIcon>
              <BookmarkBorderIcon />
            </ListItemIcon>
            <ListItemText>Important</ListItemText>
          </ListItemButton>
        </ListItem>
      <Divider />
        <ListItem disablePadding>
          <ListItemButton component={ Link } to='/completed'>
            <ListItemIcon>
              <CheckCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText>Completed</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      {/* <List>
        <ListItem disablePadding>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ bottom: 0 }} onClick={handleOpen}>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText>Log in</ListItemText>
          </ListItemButton>
        </ListItem>
      </List> */}
    </Box>
  </Drawer>
  );
}