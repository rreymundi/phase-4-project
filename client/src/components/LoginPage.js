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
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then(console.log(formData));
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
          <Typography>Log in</Typography>
        </Grid>
        <Grid item>
          <TextField required={ true } id="username" name="username" variant="standard" placeholder="username" value={formData.username} onChange={handleChange}/>
        </Grid>
        <Grid item>
          <TextField required={ true } id="password" name="password" variant="standard" placeholder="password" type="password" value={formData.password} onChange={handleChange}/>
        </Grid>
        <Grid item>
            <Button variant="contained" color="primary" type="submit" >Log in</Button>
        </Grid>
        <Grid item>
        <Typography>Don't have an account?&nbsp;
          <Link to="/signup" underline="none" >Sign up!</Link>
        </Typography>
      </Grid>

      </Grid>
    </Box>
  )
}

export default LoginPage