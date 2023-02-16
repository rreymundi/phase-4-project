import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from './TemporaryDrawer';
import UserMenu from './UserMenu';
import { Container } from '@mui/system';

const NavBar = ({ user, onLogout }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {user 
            ? 
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setDrawerOpen(true)} 
              >
                <MenuIcon />
            </IconButton>
            :
            null
          }
          <TemporaryDrawer 
            drawerOpen={drawerOpen} 
            setDrawerOpen={setDrawerOpen} 
            user={user} 
          />
          <Container component="div" sx={{ flexGrow: 1, textAlign: 'center'}} >
          <Button color='inherit' component={ Link } to='/'>
              <Typography variant="h5">
                CO.LAB
              </Typography>
              </Button>
          </Container>
            {user 
              ?
              <UserMenu 
                onLogout={onLogout} 
                anchorElUser={anchorElUser} 
                handleCloseUserMenu={handleCloseUserMenu} 
                handleOpenUserMenu={handleOpenUserMenu} 
                user={user} 
              />
              :
              <Button 
                color="inherit" 
                component={ Link } 
                to="/login">
                Log in
              </Button>
            }
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar;