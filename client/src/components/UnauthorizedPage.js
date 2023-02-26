import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';

const UnauthorizedPage = () => {

  return (
      <Container sx={{ 
        position: 'relative', 
        color: '#1976d2', 
        marginTop: '48px', 
        justifySelf: 'center' 
        }}
        >
        <Container sx={{ 
          position: 'absolute', 
          textAlign: 'left' 
          }} 
          >
          <Typography variant='h2' sx={{ 
            width: '100%', 
            height: '100%',
            textShadow: '2px 2px 6px lightgrey' 
            }}
            >
            Hold up!
          </Typography>
          <Typography variant='h5' sx={{ 
              width: '100%', 
              textShadow: '2px 2px 6px lightgrey' 
              }} 
              >
              <Link to="/login" underline="none">Log in</Link>
              &nbsp;or&nbsp;
              <Link to="/signup" underline="none">sign up</Link>
              &nbsp;to access this page.
            </Typography>
        </Container>
      </Container>
  )
}

export default UnauthorizedPage;