import React, { useEffect } from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";
import { getLessonListAction } from "../../redux/actions/lessons/GetLessonsListAction";
import { useDispatch, useSelector } from "react-redux";

const LessonGrid = () => {
  const dispatch = useDispatch();

  const { loading, success, error, lessonListData } = useSelector(
    (state) => state.lessons.getAll
  );

  useEffect(() => {
    dispatch(getLessonListAction());
  }, []);



  return (
    <Grid container spacing={2}>
    {lessonListData.map((lesson) => (
      <Grid item key={lesson.id_leccion} xs={12} sm={6} md={4} lg={3} sx={{margin:'18px 20px'}}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {lesson.nombre}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {lesson.descripcion}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Nivel: {lesson.nivel}
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
