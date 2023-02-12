import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TaskMenu from './TaskMenu';
import EditTaskModal from './EditTaskModal'

const TaskCard = ({ 
    user, 
    task, 
    projects, 
    onDeleteTask, 
    onUpdateTask 
  }) => {
  const [anchorTaskMenu, setAnchorTaskMenu] = useState(null);
  const [editTaskOpen, setEditTaskOpen] = useState(false);

  let navigate = useNavigate();

  const handleOpenEditTaskModal = () => setEditTaskOpen(true);
  const handleCloseEditTaskModal = () => {
    navigate("/tasks")
    setEditTaskOpen(false)
  };

  const handleOpenTaskMenu = (event) => {
    setAnchorTaskMenu(event.currentTarget);
  };
  const handleCloseTaskMenu = () => {
    setAnchorTaskMenu(null);
  };

  return (
    <Card 
      sx={{ 
        minWidth: 275, 
        height: "100%", 
        display: "block", 
        position: "relative" 
      }} >
      <CardActions sx={{ float: 'right'}} >
        <Button 
          size="small" 
          component={ Link } to={`/tasks/${task.id}`} 
          onClick={handleOpenTaskMenu}>
          <MoreHorizIcon />
        </Button>
        <TaskMenu 
          anchorTaskMenu={anchorTaskMenu} 
          handleCloseTaskMenu={handleCloseTaskMenu} 
          task={task} 
          onDeleteTask={onDeleteTask} 
          handleOpenEditTaskModal={handleOpenEditTaskModal} 
        />
      </CardActions>
      <CardContent>
        <Typography sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
          {task.project.name}
        </Typography>
        <Typography variant="h5" component="div">
          {task.name}
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: 14 }} color="text.secondary" >
          {task.status} • {task.priority} priority
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {task.description}
        </Typography>
      </CardContent>
      <EditTaskModal 
        user={user} 
        open={editTaskOpen} 
        handleClose={handleCloseEditTaskModal} 
        task={task} 
        projects={projects} 
        onUpdateTask={onUpdateTask} 
      />
    </Card>
  );
}

export default TaskCard;