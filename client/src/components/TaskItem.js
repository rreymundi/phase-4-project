import React from 'react';
import { Container, Card, Typography, CardContent } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const TaskItem = ({ task }) => {
    
  return (
    <Card key={task.id} sx={{ mb: .5 }} >
        <CardContent>
            <Typography sx={{ mb: .5, fontSize: 11 }} color="text.secondary" >
                {task.priority} priority
            </Typography>
            <Typography sx={{ mb: .5 }} variant="h7" component="div">
                {task.name}
            </Typography>
            <Typography sx={{ fontSize: 12 }} color="text.secondary">
                {task.description}
            </Typography>
        </CardContent>
      </Card>
  )
}

export default TaskItem;