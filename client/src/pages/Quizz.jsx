import React, { useState, useEffect } from "react";
import NavBar from "../components/misc/NavBar/NavBar";
import { useParams } from "react-router-dom";
import {
  Container,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
  Button,
  Modal,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getQuizzAction } from "../redux/actions/quizzes/GetQuizzAction";

const Pregunta = ({ pregunta, opciones, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Paper elevation={3} sx={{ padding: "20px", mb: "20px" }}>
      <Typography>{pregunta}</Typography>
      <FormControl component="fieldset">
        <RadioGroup aria-label="opciones" name="opciones">
          {opciones &&
            opciones.map((opcion, index) => (
              <FormControlLabel
                key={index}
                value={opcion.opcion}
                control={<Radio />}
                label={opcion.opcion}
                onChange={handleChange}
              />
            ))}
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};

const ResultadosModal = ({ open, onClose, puntuacion, totalPreguntas }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography variant="h6">Resultados del cuestionario</Typography>
        <Typography>
          Puntuación: {puntuacion}/{totalPreguntas}
        </Typography>
        <Button onClick={onClose}>Cerrar</Button>
      </Box>
    </Modal>
  );
};

export const Quizz = () => {
  const dispatch = useDispatch();
  const { id_leccion } = useParams();

  const { loading, success, error, quizzData } = useSelector(
    (state) => state.quizzes.getById
  );

  const [respuestasUsuario, setRespuestasUsuario] = useState([]);
  const [puntuacion, setPuntuacion] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getQuizzAction(id_leccion));
  }, [dispatch, id_leccion]);

  useEffect(() => {
    console.log(quizzData);
  }, [quizzData]);

  const verificarRespuestas = () => {

    if (!quizzData || !quizzData.pregunta) {
      console.error("El objeto quizzData o la propiedad pregunta no están definidos.");
      return;
    }
    
    let puntuacion = 0;
    const nuevasRespuestas = []; 

    quizzData.pregunta.forEach((pregunta, index) => {
      const respuestaCorrecta = pregunta.opcions[0].opcion;
      const respuestaUsuario = respuestasUsuario[index];
      if (respuestaUsuario === respuestaCorrecta) {
        puntuacion++;
      }
      nuevasRespuestas.push(respuestaUsuario); 
    });

    setPuntuacion(puntuacion);
    setRespuestasUsuario(nuevasRespuestas); 
    setModalOpen(true);
    console.log("Respuestas del usuario:", nuevasRespuestas);
  };

  return (
    <>
      <NavBar />
      <Paper
        elevation={10}
        sx={{
          width: "95%",
          height: "85%",
          margin: "36px auto",
          padding: "16px 12px",
        }}
      >
        <Container>
          {success === true && (
            <Typography variant="h5">{quizzData.nombre}</Typography>
          )}
          {success === true &&
            quizzData.pregunta.map((pregunta, index) => (
              <Pregunta
                key={index}
                pregunta={pregunta.pregunta}
                opciones={pregunta.opcions}
                onChange={(respuesta) => {
                  const nuevasRespuestas = [...respuestasUsuario];
                  nuevasRespuestas[index] = respuesta;
                  setRespuestasUsuario(nuevasRespuestas);
                }}
              />
            ))}
          <Button onClick={verificarRespuestas}>Verificar respuestas</Button>
        </Container>
      </Paper>
      <ResultadosModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        puntuacion={puntuacion}
        totalPreguntas={10}
      />
    </>
  );
};
