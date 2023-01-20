import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from './TemporaryDrawer';

export default function NavBar({ user, onLogout }) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  let navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    fetch("/logout", {
      method: 'DELETE'
    })
    console.log("Logged out!")
    onLogout();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawerOpen(true)} 
          >
            <MenuIcon />
          <TemporaryDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PHASE 4 PROJECT
          </Typography>
          {user ?
            <Button color="inherit" onClick={handleLogout}>Log out</Button>
            :
            <Button color="inherit" component={ Link } to="/login">Log in</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
