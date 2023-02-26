import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import { ErrorContext } from '../context/error';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const EditTaskModal = ({ 
    open, 
    handleClose, 
    task, 
    projects, 
    onUpdateTask,
    }) => {
      const {user} = useContext(UserContext);
      const {errors, setErrors} = useContext(ErrorContext);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        display: 'flex'
      };

      const [formData, setFormData] = useState({
        name: task.name,
        description: task.description,
        priority: task.priority,
        project: task.project_id,
        status: task.status
      });

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        })
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const newTaskData = {
          name: formData.name,
          description: formData.description,
          priority: formData.priority,
          project_id: formData.project,
          user_id: user.id,
          status: formData.status
          };
        fetch(`/tasks/${task.id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(newTaskData)
        })
        .then((r) => {
          if (r.ok) {
            r.json()
            .then((updatedTask) => onUpdateTask(updatedTask))
            handleClose()
          } else {
            r.json().then((errorData) => setErrors(errorData.errors))
          }
        })
      };

      const renderedProjects = projects?.map((project) => 
        <MenuItem key={project.id} value={project.id}>{project.name}</MenuItem>
        );

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
          <Box sx={style} component="form" onSubmit={handleSubmit} >
            <Grid 
              container 
              spacing={2} 
              alignItems="center" 
              justify="center" 
              direction="column" 
              >
              <Grid item>
                <Typography sx={{ fontWeight: 'bold' }}>Edit task</Typography>
              </Grid>
              <Grid item>
                <TextField 
                  sx={{ maxWidth: 166 }} 
                  id="name" 
                  name="name" 
                  variant="standard"
                  multiline 
                  maxRows={2} 
                  inputProps={{ maxLength: 30 }} 
                  placeholder="Name" 
                  value={formData.name} 
                  onChange={handleChange}/>
              </Grid>
              <Grid item>
                <TextField 
                  sx={{ maxWidth: 166 }} 
                  id="description" 
                  name="description" 
                  variant="standard" 
                  placeholder="Description" 
                  multiline 
                  maxRows={4} 
                  inputProps={{ maxLength: 60 }} 
                  value={formData.description} 
                  onChange={handleChange}/>
              </Grid>
              <Grid item>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 166 }}>
                  <InputLabel id="priority">Priority</InputLabel>
                  <Select
                    labelId="priority"
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    label="Priority"
                    >
                    <MenuItem value={"low"}>Low</MenuItem>
                    <MenuItem value={"normal"}>Normal</MenuItem>
                    <MenuItem value={"high"}>High</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 166 }}>
                  <InputLabel id="project">Project</InputLabel>
                  <Select
                    labelId="project"
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    label="Project"
                    >
                    {renderedProjects}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 166 }}>
                  <InputLabel id="status">Status</InputLabel>
                  <Select
                    labelId="status"
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    label="Status"
                    >
                    <MenuItem value={"new"}>New</MenuItem>
                    <MenuItem value={"investigating"}>Investigating</MenuItem>
                    <MenuItem value={"blocked"}>Blocked</MenuItem>
                    <MenuItem value={"in-progress"}>In-Progress</MenuItem>
                    <MenuItem value={"closed"}>Closed</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" type="submit" >Update</Button>
              </Grid>
                {errors.length > 0  
                  ? errors.map((error,index) => 
                      <Grid item key={index} >
                        <Typography 
                          sx={{ color: 'red' }}
                        >
                        {error}.
                        </Typography>
                      </Grid>
                    )
                  : null
                }
              </Grid>
          </Box>
        </Modal>
      )
}

export default EditTaskModal;