import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate, NavLink} from 'react-router-dom';

const QuizzGrid = () => {
  const lessons = [
    { id_leccion: 1, name: 'nombre 1', level: 'Básico' },
    { id_leccion: 2, name: 'nombre 2', level: 'Intermedio' },
    { id_leccion: 3, name: 'nombre 3', level: 'Avanzado' },
    {id_leccion: 4, name:'nombre 4',level:'Avanzado'}
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
              <Button component={NavLink} to={`/quizz/${lesson.id_leccion}`} variant='outlined' >Tomar quizz</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default QuizzGrid;