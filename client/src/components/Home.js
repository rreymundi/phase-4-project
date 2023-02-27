import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import hero from '../assets/hero.jpg'

const Home = () => {
  const {user} = useContext(UserContext);

  return (
      <Container sx={{ 
        position: 'relative', 
        color: '#1976d2', 
        marginTop: '48px', 
        justifySelf: 'center',
        paddingBottom: '48px' 
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
            textShadow: '2px 2px 6px lightgrey' 
            }}
            >
            CO.LAB
          </Typography>
          {user
            ? <Typography variant='h4' sx={{ 
                width: '100%', 
                textShadow: '2px 2px 6px lightgrey' 
                }} 
                >
                Welcome{user ? `, ${user.username}!` : `!`}
              </Typography>
            : <Typography variant='h4' sx={{ 
                width: '100%', 
                textShadow: '2px 2px 6px lightgrey' 
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