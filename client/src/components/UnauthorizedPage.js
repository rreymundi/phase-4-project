import React from 'react';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import unauthorized from '../assets/unauthorized.jpg'

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
          opacity: 1, 
          overflow: 'hidden', 
          width: '1000px', 
          height: '500px',
          position: 'absolute',
          transform: 'translate(8%, 15%)',
          }}
          >
          <img sx={{ objectFit: 'cover'}} src={unauthorized} alt="collab home" />
        </Container>
        <Container sx={{ 
          position: 'absolute', 
          textAlign: 'left' 
          }} 
          >
          <Typography variant='h1' sx={{ 
            width: '100%', 
            height: '100%',
            textShadow: '2px 2px 6px lightgrey' 
            }}
            >
            Hold up! 
          </Typography>
          <Typography variant='h4' sx={{ 
              width: '100%', 
              textShadow: '2px 2px 6px lightgrey' 
              }} 
              >
              Please log in or sign up to access this page.
            </Typography>
        </Container>
      </Container>
  )
}

export default UnauthorizedPage;