import React from 'react';
import { Container } from '@mui/system';

const Home = ({ user }) => {
  return (
    <Container>
      <h1>Welcome{user ? `, ${user.username}!` : `!`}</h1>
    </Container>
  )
}

export default Home;