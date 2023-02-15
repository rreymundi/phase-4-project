import React from 'react';
import { Card, Typography, CardContent } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const TaskItem = ({ task }) => {

  return (
    <Card 
      key={task.id} 
      sx={{ 
        mb: .5,
        '&:hover': {
          transform: 'translateX(-4px) translateY(-4px)'
          },
        transition: 'all 350ms cubic-bezier(0.175, 0.885, 0.335, 1)',
        transitionDelay: '0s',
      }}
      >
        <CardContent>
        <Avatar sx={{ float: 'right', mb: .5, height: '18px', width: '18px'}} alt={task.user.username} src={task.user.image} />
        <Typography sx={{ mb: .5, fontSize: 11 }} color="text.secondary" >
        {task.priority} priority
        </Typography>
        <Typography sx={{ mb: .5 }} variant="h7" component="div">
        {task.name}
        </Typography>
            <Typography sx={{ fontSize: 11 }} color="text.secondary">
                {task.description}
            </Typography>
        </CardContent>
      </Card>
  )
}

export default TaskItem;