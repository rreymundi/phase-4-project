import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  };

  const handleSubmit = (e) => {
    console.log(formData)
  }

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

  return (
    <Box sx={style} component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center" justify="center" direction="column" >
        <Grid item>
          <Typography>Login</Typography>
        </Grid>
        <Grid item>
          <TextField required={ true } id="username" name="username" variant="standard" placeholder="username" value={formData.username} onChange={handleChange}/>
        </Grid>
        <Grid item>
          <TextField required={ true } id="password" name="password" variant="standard" placeholder="password" type="password" value={formData.password} onChange={handleChange}/>
        </Grid>
        <Grid item>
            <Button variant="contained" color="primary" type="submit" >Login</Button>
        </Grid>
        <Grid item>
        <Typography>Don't have an account?&nbsp;
          <Link to="/signup">Sign up here!</Link>
        </Typography>
      </Grid>

      </Grid>
    </Box>
  )
}

export default LoginPage