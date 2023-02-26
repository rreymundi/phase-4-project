import React, { useState, useContext } from 'react';
import { ErrorContext } from '../context/error';
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
    task, 
    projects, 
    onDeleteTask, 
    onUpdateTask,
  }) => {
    const {setErrors} = useContext(ErrorContext);
    const [anchorTaskMenu, setAnchorTaskMenu] = useState(null);
    const [editTaskOpen, setEditTaskOpen] = useState(false);

    let navigate = useNavigate();

    const handleOpenEditTaskModal = () => setEditTaskOpen(true);
    const handleCloseEditTaskModal = () => {
      setErrors([])
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
        height: '13vw', 
        display: "block", 
        position: "relative",
        '&:hover': {
          transform: 'translateX(-2px) translateY(-2px)',
          // backgroundColor: 'lightblue'
          },
        transition: 'all 350ms cubic-bezier(0.175, 0.885, 0.335, 1)',
        transitionDelay: '0s',
      }} >
      <CardActions sx={{ float: 'right'}} >
        <Button 
          size="small" 
          component={ Link } to={`/tasks/${task.id}`} 
          onClick={handleOpenTaskMenu}
          >
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