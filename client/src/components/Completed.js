import React from 'react';
import CompletedTaskGrid from './CompletedTaskGrid';
import { Container } from '@mui/system';

const Completed = () => {
  return (
    <Container>
      <h1>Completed</h1>
      <CompletedTaskGrid />
    </Container>
  )
}

export default Completed;