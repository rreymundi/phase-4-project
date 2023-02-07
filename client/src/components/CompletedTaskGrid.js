import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TaskCard from './TaskCard';

const CompletedTaskGrid = ({ tasks }) => {

  const renderedTask = tasks?.map((task) => 
    <Grid item xs={4} key={task} >
      <TaskCard task={task} />
    </Grid>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          {renderedTask}
        </Grid>
      </Grid>
    </Box>
  );
}

export default CompletedTaskGrid;