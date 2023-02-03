import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';

const NewTaskModal = ({ open, handleClose }) => {

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
          priority: formData.priority
          };
        fetch("http://localhost:9292/tasks", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(newTask)
        })
        .then((r) => r.json())
        // .then((newList) => onAddList(newList))
        // .then(setFormData({
        //   name: "",
        // }))
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
                <Button variant="contained" color="primary" type="submit" >Create</Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      )
}

export default NewTaskModal;