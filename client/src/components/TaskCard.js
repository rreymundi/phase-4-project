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

const TaskCard = ({ user, task, projects, onDeleteTask }) => {
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
    <Card sx={{ minWidth: 275, height: "100%", display: "block", position: "relative" }} >
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
        <Button sx={{ position: "absolute", bottom: 10, right: 16 }} size="small" component={ Link } to={`/tasks/${task.id}`} onClick={handleOpenTaskMenu}>
          <MoreHorizIcon />
        </Button>
        <TaskMenu anchorTaskMenu={anchorTaskMenu} handleCloseTaskMenu={handleCloseTaskMenu} task={task} onDeleteTask={onDeleteTask} handleOpenEditTaskModal={handleOpenEditTaskModal} />
      </CardActions>
      <EditTaskModal user={user} open={editTaskOpen} handleClose={handleCloseEditTaskModal} task={task} projects={projects} />
    </Card>
  );
}

export default TaskCard;