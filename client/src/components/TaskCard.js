import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const TaskCard = ({ task }) => {
  return (
    <Card sx={{ minWidth: 275 }} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {task.project.name}
        </Typography>
        <Typography variant="h5" component="div">
          {task.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" >
          {task.status} • {task.priority} priority
        </Typography>
        <Typography variant="body2">
          {task.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Update</Button>
      </CardActions>
    </Card>
  );
}

export default TaskCard;