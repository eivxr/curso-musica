import React from 'react';
import NavBar from '../components/misc/NavBar/NavBar';
import { Box, Container } from '@mui/material';
import LoginForm from '../components/login-register/LoginForm';

export const Login = () => {
  return (
    <Box >
      <NavBar />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',mt:'48px' }}>
        <LoginForm/>
      </Box>
    </Box>
  );
};
