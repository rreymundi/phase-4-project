import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import TaskList from './TaskList';

const ProjectRoadmap = ({ project, tasks, open, handleClose }) => {

    const cardStatus = [
        "New", 
        "Investigating", 
        "Blocked", 
        "In-Progress", 
        "Closed",
    ];

    const style = {
        display: 'flex',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '80%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      };

    const renderedLists = cardStatus.map((status) => <TaskList key={status} status={status} tasks={tasks} />)

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Container sx={{ overflowX: 'auto'}} >
                <Box sx={style}>
                <Container sx={{ width: 'auto'}} >
                    <Typography variant='h5' >{project.name}</Typography>
                </Container>
                    {renderedLists}
                </Box>
            </Container>
        </Modal>
        )
}

export default ProjectRoadmap;