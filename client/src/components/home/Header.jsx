import React from 'react';
import { Typography } from '@mui/material';

const Header = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <Typography variant="h2" gutterBottom>
        Hola, Usuario. Bienvenido a m-U-sic
      </Typography>
      <Typography variant="h5">
        Explora nuestras características y descubre más sobre nosotros.
      </Typography>
    </div>
  );
};

export default Header;
