import { combineReducers } from "@reduxjs/toolkit";


import { GetQuizzSlice} from "./GetQuizzSlice";


export * from './GetQuizzSlice';


export const QuizzesReducer = combineReducers({
    getById: GetQuizzSlice.reducer,
})