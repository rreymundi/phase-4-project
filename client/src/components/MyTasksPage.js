import React from 'react';
import NestedGrid from './NestedGrid';
import { Container } from '@mui/system';

const MyTasksPage = ({ tasks }) => {

  return (
    <Container>
      <h1>My Tasks</h1>
      <NestedGrid tasks={tasks} />
    </Container>
  )
}

export default MyTasksPage;