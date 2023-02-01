import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TaskCard from './TaskCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const NestedGrid = ({ tasks }) => {

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

export default NestedGrid;