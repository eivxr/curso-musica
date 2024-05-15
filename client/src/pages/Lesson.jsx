import React, { useEffect } from "react";
import NavBar from "../components/misc/NavBar/NavBar";
import { useParams } from "react-router-dom";
import { Container, Paper, Typography, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getLessonAction } from "../redux/actions/lessons/GetLessonAction";

export const Lesson = ({}) => {
  const dispatch = useDispatch();
  const { id_leccion } = useParams();
  const { loading, success, error, lessonData } = useSelector(
    (state) => state.lessons.getById
  );

  useEffect(() => {
    dispatch(getLessonAction(id_leccion));
  }, []);

  useEffect(() => {
    console.log(lessonData);
  }, [lessonData]);

  return (
    <>
      <NavBar />
      <Paper
        elevation={10}
        sx={{
          width: "95%",
          height: "85%",
          margin: "36px auto",
        }}
      > 

        <Container>
          {success === true && <Typography variant="h3">{lessonData[0].nombre}</Typography>}
          {success === true && lessonData.map((topic) => (
            <Paper elevation={8} key={topic.index} sx={{padding:'8px 6px', margin:'10px 8px'}}>
              <Typography variant="h6">{topic.descripcion}</Typography>
              <Typography variant="body1">{topic.contenido}</Typography>
            </Paper>
          ))}
        </Container>
        <Typography variant="h5" sx={{padding:'6px'}}>Leccion numero: {`${id_leccion}`}</Typography>
      </Paper>
    </>
  );
};
