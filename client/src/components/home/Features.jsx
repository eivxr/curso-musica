import React from 'react';
import { Grid, Typography } from '@mui/material';

const Features = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <img src="/img/img1.jpg" alt="Imagen de pch.vector" style={{ maxWidth: '100%', height: 'auto' }} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          Nuestras características principales
        </Typography>
        <Typography variant="body1" paragraph>
          En nuestra plataforma, ofrecemos una amplia gama de características diseñadas para mejorar tu experiencia de aprendizaje musical. 
          Desde lecciones interactivas hasta herramientas de práctica avanzadas, tenemos todo lo que necesitas para llevar tus habilidades musicales al siguiente nivel.
        </Typography>
        <Typography variant="body1">
          ¿Qué nos diferencia?
        </Typography>
        <ul>
          <li>Lecciones personalizadas adaptadas a tus necesidades y nivel de habilidad.</li>
          <li>Acceso ilimitado a una biblioteca de recursos educativos, incluyendo partituras, pistas de acompañamiento y ejercicios prácticos.</li>
          <li>Comunidad activa de músicos y profesores dispuestos a compartir sus conocimientos y experiencias.</li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default Features;
