import axios from 'axios';
import {
 fetchRegisterUser,fetchRegisterUserFailure,fetchRegisterUserSuccess
} from '../../slices/users/RegisterUserSlice';


export const registerUserAction = (dataForm) => async (dispatch) => 
{
    try{
        dispatch(fetchRegisterUser());

        const {data} = await axios.post('http://localhost:8080/signup', dataForm);
        console.log(data.response);
        dispatch(fetchRegisterUserSuccess(data.response));

    }catch (error){
        console.error('Error al registrar usuario:', error);
        dispatch(fetchRegisterUserFailure(error.message));
        throw error; 
    }
}