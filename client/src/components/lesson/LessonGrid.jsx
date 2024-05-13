import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate, NavLink} from 'react-router-dom';

const LessonGrid = () => {
  const lessons = [
    { id_leccion: 1, name: 'Introducción a la guitarra', description: 'Aprende los fundamentos de la guitarra acústica.', level: 'Básico' },
    { id_leccion: 2, name: 'Técnica de dedos', description: 'Mejora tu técnica de dedos y aprende nuevos acordes.', level: 'Intermedio' },
    { id_leccion: 3, name: 'Improvisación avanzada', description: 'Domina la improvisación en diferentes estilos musicales.', level: 'Avanzado' },
    // Agrega más lecciones si es necesario
  ];

  const navigate = useNavigate();


  return (
    <Grid container spacing={2}>
      {lessons.map((lesson) => (
        <Grid item key={lesson.id_leccion} xs={12} sm={6} md={4} lg={3} sx={{margin:'18px 20px'}}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {lesson.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {lesson.description}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Nivel: {lesson.level}
              </Typography>
              <Button component={NavLink} to={`/lesson/${lesson.id_leccion}`} variant='outlined' >Ver leccion</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default LessonGrid;
