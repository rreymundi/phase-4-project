import React from 'react';
import { Card, Typography, CardContent } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const TaskItem = ({ task }) => {

  return (
    <Card key={task.id} sx={{ mb: .5 }} >
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