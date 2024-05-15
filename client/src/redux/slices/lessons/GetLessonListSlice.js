import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
    success: false,
    lessonListData: []
}

export const GetLessonListSlice = createSlice({
    name: 'GetLessonListSlice',
    initialState,
    reducers: {
        fetchGetLessonList: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        },
        fetchGetLessonListSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.lessonListData = action.payload;
        },
        fetchGetLessonListFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        }
    }
});

export const {
    fetchGetLessonList,
    fetchGetLessonListFailure,
    fetchGetLessonListSuccess
} = GetLessonListSlice.actions;


