import React from 'react';
import { Typography, Card, CardContent, CardHeader, Avatar, Grid } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const Testimonials = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Lo que dicen nuestros clientes
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <TestimonialCard
            name="Ana López"
            avatar={<Avatar><PersonIcon /></Avatar>}
            comment="¡Increíble experiencia! Los cursos son muy completos y fáciles de seguir. Definitivamente lo recomiendo."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TestimonialCard
            name="Juan Pérez"
            avatar={<Avatar><PersonIcon /></Avatar>}
            comment="Estoy muy impresionado con la calidad del contenido. ¡He aprendido mucho en poco tiempo!"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TestimonialCard
            name="María Rodríguez"
            avatar={<Avatar><PersonIcon /></Avatar>}
            comment="¡Excelente servicio al cliente! Siempre están dispuestos a responder mis preguntas y resolver mis problemas."
          />
        </Grid>
      </Grid>
    </div>
  );
};

const TestimonialCard = ({ name, avatar, comment }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="body1" paragraph>{comment}</Typography>
      </CardContent>
      <CardHeader
        avatar={avatar}
        title={name}
        subheader="Cliente satisfecho"
        style={{ textAlign: 'center' }}
      />
    </Card>
  );
};

export default Testimonials;
