import axios from "axios";

import {
fetchGetLesson,fetchGetLessonFailure,fetchGetLessonSuccess
} from "../../slices/lessons/GetLessonSlice";

export const getLessonAction = (id_leccion) => async (dispatch) => {
  try {
    dispatch(fetchGetLesson());
    const { data } = await axios.get(
      `http://localhost:8080/lecciones/${id_leccion}`
    ); 
    dispatch(fetchGetLessonSuccess(data.leccion));
  } catch (error) {
    dispatch(
        fetchGetLessonFailure(
        "No se logro obtener la leccion"
      )
    );
  }
};
