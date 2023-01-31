import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ProjectsPage from './ProjectsPage';
import MyTasksPage from './MyTasksPage';
import Completed from './Completed';

const Content = ({ user, onLogin }) => {
  return (
    <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/login' element={<LoginPage onLogin={onLogin} />} />
        <Route path='/signup' element={<SignupPage onLogin={onLogin} />} />
        <Route path='/projects'element={<ProjectsPage />} />
        <Route path='/tasks'element={<MyTasksPage />} />
        <Route path='/completed'element={<Completed />} />
        </Routes>
  )
}

export default Content