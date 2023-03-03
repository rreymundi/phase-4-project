import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TaskCard from './TaskCard';

const NestedGrid = ({ 
    projects, 
    onDeleteTask, 
    onUpdateTask,
  }) => {

  const {user} = useContext(UserContext);
  // const sortedTasks = user.tasks.sort((a, b) => {
  //   const nameA = a.name.toUpperCase();
  //   const nameB = b.name.toUpperCase();
  //   if (nameA < nameB) {
  //     return -1;
  //   }
  //   if (nameA > nameB) {
  //     return 1;
  //   }
  //   return 0;
  // });



  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} >
        <Grid container item spacing={3} >
          {user.tasks.map((task) => {
                return (
                  <Grid item xs={4} key={task.id} >
                    <TaskCard 
                      task={task} 
                      onDeleteTask={onDeleteTask} 
                      projects={projects} 
                      onUpdateTask={onUpdateTask}
                    />
                  </Grid>
                )
              })}
        </Grid>
      </Grid>
    </Box>
  )
}

export default NestedGrid;