import React from 'react';
import { Typography, Button } from '@mui/material';

const Contact = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        ¡Contáctanos ahora!
      </Typography>
      <Typography variant="body1" gutterBottom>
        ¿Tienes alguna pregunta o comentario? ¡Estamos aquí para ayudarte!
      </Typography>
      <Button variant="contained" color="primary">
        Contactar
      </Button>
    </div>
  );
};

export default Contact;
