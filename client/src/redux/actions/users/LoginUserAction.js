import axios from "axios";
import {
  fetchLoginUser,
  fetchLoginUserFailure,
  fetchLoginUserSuccess,
} from "../../slices/users/LoginUserSlice";

export const loginUserAction = (loginData) => async (dispatch) => {
  try {
    dispatch(fetchLoginUser());
    const data = await axios.post(
      "http://localhost:8080/auth/",
      loginData
    );
    console.log(data);

   // dispatch(fetchLoginUserSuccess(data.data));
  } catch (error) {
    console.log(error);
    dispatch(fetchLoginUserFailure("Error, usuario no encontrado"));
  }
};
