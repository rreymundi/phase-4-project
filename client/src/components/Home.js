import React from 'react';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';

const Home = ({ user }) => {
  return (
      <Container sx={{ position: 'relative', color: 'white', marginTop: '48px', justifySelf: 'center' }}>
        <Container sx={{ opacity: 1, overflow: 'hidden', width: '1000px', height: '600px' }}>
          <img src="https://github.com/rreymundi/phase-4-project/blob/main/client/src/assets/daria-shevtsova-zbWFT4eVopE-unsplash.jpg" alt="listit home" />
        </Container>
        <Container sx={{ position: 'absolute', top: '20%', left: '40%', transform: 'translate(-50%, -50%)', textAlign: 'right' }} >
          <Typography variant='h1' sx={{ width: '100%', height: '100%' }}>COLLABO</Typography>
          {user
            ?
              <Typography variant='h4' sx={{ width: '100%' }} >Welcome{user ? `, ${user.username}!` : `!`}</Typography>
            :
              <Typography variant='h4' sx={{ width: '100%' }} >team up // stay organized</Typography>
          }
        </Container>
      </Container>
  )
};

export default Home;