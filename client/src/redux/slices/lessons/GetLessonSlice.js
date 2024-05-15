import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loading:false,
    error:null,
    success:false,
    lessonData: []
}

export const GetLessonSlice = createSlice({
    name: 'GetLessonSlice',
    initialState,
    reducers: {
        fetchGetLesson: (state, action) => {
            state.loading = true;
            state.error = null;
            state. success = null
        },
        fetchGetLessonSuccess: (state, action) =>{
            state.loading = false;
            state.error = false;
            state.success = true;
            state.lessonData = action.payload;
        },
        fetchGetLessonFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchGetLessonFailure,
    fetchGetLessonSuccess,
    fetchGetLesson
} = GetLessonSlice.actions;