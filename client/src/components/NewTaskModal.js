import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const NewTaskModal = ({ user, open, projects, handleClose, onAddTask }) => {

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
        name: "",
        description: "",
        priority: "",
        project: ""
      });

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        })
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();
        const newTask = {
          name: formData.name,
          description: formData.description,
          priority: formData.priority,
          project_id: formData.project,
          user_id: user.id,
          status: "new",
          };
        fetch("/tasks", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(newTask)
        })
        .then((r) => r.json())
        .then((newTask) => onAddTask(newTask))
      };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
          <Box sx={style} component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center" justify="center" direction="column" >
              <Grid item>
                <Typography>Create a task</Typography>
              </Grid>
              <Grid item>
                <TextField required={ true } id="name" name="name" variant="standard" placeholder="Name" value={formData.name} onChange={handleChange}/>
              </Grid>
              <Grid item>
                <TextField required={ true } id="description" name="description" variant="standard" placeholder="Description" multiline maxRows={3} inputProps={{ maxLength: 50 }} value={formData.description} onChange={handleChange}/>
              </Grid>
              <Grid item>
                <FormControl required variant="standard" sx={{ m: 1, minWidth: 120 }}>
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
                <FormControl required variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="project">Project</InputLabel>
                  <Select
                    labelId="project"
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    label="Project"
                    >
                    {projects.map((project) => 
                      <MenuItem key={project.id} value={project.id}>{project.name}</MenuItem>
                      )}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" type="submit" >Create</Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      )
}

export default NewTaskModal;