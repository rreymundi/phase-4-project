import React from 'react';
import { Routes, Route } from "react-router-dom";
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

const Content = () => {
  return (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
    </Routes>
  )
}

export default Content