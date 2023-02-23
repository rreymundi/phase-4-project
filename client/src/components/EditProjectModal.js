import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';

const EditProjectModal = ({ 
    open, 
    handleClose, 
    project, 
    onUpdateProject,
    errors,
    setErrors 
    }) => {

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
        name: project.name,
        description: project.description,
      });

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        })
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const newProjectData = {
          name: formData.name,
          description: formData.description
          };
        fetch(`/projects/${project.id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(newProjectData)
        })
        .then((r) => {
          if (r.ok) {
            r.json()
            .then((updatedProject) => onUpdateProject(updatedProject))
            handleClose()
          } else {
            r.json().then((errorData) => setErrors(errorData.errors))
          }
        })
      };

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
              direction="column" >
              <Grid item>
                <Typography sx={{ fontWeight: 'bold' }}>Edit project</Typography>
              </Grid>
              <Grid item>
                <TextField 
                  sx={{ maxWidth: 166 }} 
                  id="name" 
                  name="name" 
                  variant="standard" 
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
                  maxRows={3} 
                  inputProps={{ maxLength: 50 }} 
                  value={formData.description} 
                  onChange={handleChange}/>
              </Grid>
              <Grid item>
                <Button 
                  variant="contained" 
                  color="primary" 
                  type="submit" >
                  Update
                </Button>
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

export default EditProjectModal;