import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

const Content = ({ onLogin }) => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
        <Route path="/signup" element={<SignupPage onLogin={onLogin} />} />
        </Routes>
  )
}

export default Content