import React from 'react';
import { useNavigate } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

const UserMenu = ({ onLogout, anchorElUser, handleCloseUserMenu, handleOpenUserMenu, user }) => {
    const handleLogout = () => {
        navigate("/");
        fetch("/logout", {
          method: 'DELETE'
        })
        onLogout();
      };

    let navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.username} src={user.image} />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem sx={{ 
                  cursor: 'default',
                  '&:hover': {
                    background: 'none',
                  }, 
                }}
                >
                <Typography>{user.username}</Typography>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={handleLogout} >
                    Log out
                  </Typography>
              </MenuItem>
            </Menu>
          </Box>
    )
}

export default UserMenu;