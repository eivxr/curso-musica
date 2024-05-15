import { combineReducers } from "@reduxjs/toolkit";


import { GetLessonListSlice} from './GetLessonListSlice'
import {GetLessonSlice} from './GetLessonSlice'

export * from '../users/RegisterUserSlice';
export * from '../users/LoginUserSlice';


export const LessonsReducer = combineReducers({
    getAll: GetLessonListSlice.reducer,
    getById: GetLessonSlice.reducer
})