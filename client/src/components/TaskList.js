import React from 'react';
import { Card, Typography } from '@mui/material';
import { Container } from '@mui/material'
import TaskItem from './TaskItem';
import {List} from '@mui/material';

const TaskList = ({ status, tasks }) => {

    const renderedTasks = tasks.map((task) => 
        task.status === status.toLowerCase()
        ? 
        <TaskItem key={task.id} task={task} /> 
        : 
        null
    );

    return (
        <Card sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: '10px', backgroundColor: '#f3f8fe', overflowY: 'auto' }} >
            <Container sx={{ display: 'flex', margin: 1, justifyItems: 'center' }} >
              <Typography>
                  {status}
              </Typography>
            </Container>
            <List sx={{ margin: 1 }}>
                {renderedTasks}
            </List>
          </Card>
      )
    }

export default TaskList;