import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TaskCard from './TaskCard';

const NestedGrid = ({ 
    tasks, 
    projects, 
    onDeleteTask, 
    onUpdateTask,
  }) => {


  const sortedTasks = tasks?.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  const renderedTasks = sortedTasks?.map((task) => 
    <Grid item xs={4} key={task.id} >
      <TaskCard 
        task={task} 
        onDeleteTask={onDeleteTask} 
        projects={projects} 
        onUpdateTask={onUpdateTask}
      />
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
  )
}

export default NestedGrid;