import React from 'react';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import hero from '../assets/hero.jpg'

const Home = ({ user }) => {

  return (
      <Container sx={{ 
        position: 'relative', 
        color: 'white', 
        marginTop: '48px', 
        justifySelf: 'center' 
        }}
        >
        <Container sx={{ 
          opacity: 1, 
          overflow: 'hidden', 
          width: '1000px', 
          height: '600px' 
          }}
          >
          <img sx={{ objectFit: 'cover' }} src={hero} alt="collab home" />
        </Container>
        <Container sx={{ 
          position: 'absolute', 
          top: '20%', 
          left: '40%', 
          transform: 'translate(-50%, -50%)', 
          textAlign: 'right' 
          }} 
          >
          <Typography variant='h1' sx={{ 
            width: '100%', 
            height: '100%',
            textShadow: '2px 4px 4px rgba(46,91,173,0.6)' 
            }}
            >
            CO.LAB
          </Typography>
          {user
            ?
            <Typography variant='h4' sx={{ 
              width: '100%', 
              textShadow: '2px 4px 4px rgba(46,91,173,0.6)' 
              }} 
              >
              Welcome{user ? `, ${user.username}!` : `!`}
            </Typography>
            :
            <Typography variant='h4' sx={{ 
              width: '100%', 
              textShadow: '2px 4px 4px rgba(46,91,173,0.6)' 
              }} 
              >
              team up // stay organized
            </Typography>
          }
        </Container>
      </Container>
  )
}

export default Home;