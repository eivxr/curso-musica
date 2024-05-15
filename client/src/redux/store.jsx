import {combineReducers, configureStore} from '@reduxjs/toolkit';

import { UsersReducer } from './slices/users/indexUser';
import { LessonsReducer } from './slices/lessons/indexLesson';
import { QuizzesReducer } from './slices/quizzes/indexQuizzes';

const combineReducer = combineReducers({
    users: UsersReducer,
    lessons:LessonsReducer,
    quizzes: QuizzesReducer
})

const rootReducer = (state, action) =>{
    return combineReducer(state, action);
};

export const store = configureStore({
    reducer: rootReducer,
});