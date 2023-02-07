import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TaskCard from './TaskCard';

const NestedGrid = ({ user, tasks, projects, onDeleteTask }) => {

  const renderedTasks = tasks?.map((task) => 
    <Grid item xs={4} key={task.id} >
      <TaskCard user={user} task={task} onDeleteTask={onDeleteTask} projects={projects} />
    </Grid>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} >
        <Grid container item spacing={3} >
          {renderedTasks}
        </Grid>
      </Grid>
    </Box>
  );
}

export default NestedGrid;