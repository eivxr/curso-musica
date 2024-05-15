import axios from "axios";

import {
fetchGetQuizz,fetchGetQuizzFailure,fetchGetQuizzSuccess
} from "../../slices/quizzes/GetQuizzSlice";

export const getQuizzAction = (id_leccion) => async (dispatch) => {

  console.log(id_leccion);
  try {
    dispatch(fetchGetQuizz());

    const {data} = await axios.get(
      `http://localhost:8080/test/${id_leccion}`
    ); 
    
    dispatch(fetchGetQuizzSuccess(data.evaluacion));
  } catch (error) {
    dispatch(
        fetchGetQuizzFailure(
        "No se logro obtener el test"
      )
    );
  }
};
