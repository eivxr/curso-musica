import { combineReducers } from "@reduxjs/toolkit";


import { LoginUserSlice } from "./LoginUserSlice";
import { RegisterUserSlice } from "./RegisterUserSlice";


export * from '../users/RegisterUserSlice';
export * from '../users/LoginUserSlice';


export const UsersReducer = combineReducers({
    login: LoginUserSlice.reducer,
    register: RegisterUserSlice.reducer
})