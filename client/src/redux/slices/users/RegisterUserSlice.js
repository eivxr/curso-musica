import  {createSlice} from '@reduxjs/toolkit';


const initialState = {
    loading:null,
    success:null,
    error:null,
    registerData: {}
}

export const RegisterUserSlice = createSlice({
    name:'RegisterUserSlice',
    initialState,
    reducers: {
        fetchRegisterUser:(state, action) =>{
            state.loading = true;
            state.error = null;
            state. success = null
        },
        fetchRegisterUserSuccess: (state,action) =>{
            state.loading = false;
            state.error = false;
            state.success = true;
        },
        fetchRegisterUserFailure: (state,action)=>{
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchRegisterUser,
    fetchRegisterUserFailure,
    fetchRegisterUserSuccess
} = RegisterUserSlice.actions;