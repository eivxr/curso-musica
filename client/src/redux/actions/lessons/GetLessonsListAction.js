import axios from "axios";
import { fetchGetLessonList,fetchGetLessonListFailure,fetchGetLessonListSuccess} from '../../slices/lessons/GetLessonListSlice';
import { useDispatch, useSelector } from "react-redux";

export const getLessonListAction = () => async (dispatch) => {
    try {
        dispatch(fetchGetLessonList());
        const { data } = await axios.get('http://localhost:8080/lecciones');
        dispatch(fetchGetLessonListSuccess(data.lecciones));

    } catch (error) {
        dispatch(fetchGetLessonListFailure("Error al obtener la lista de productos"));
    }
}