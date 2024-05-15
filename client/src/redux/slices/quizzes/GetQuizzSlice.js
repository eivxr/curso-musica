import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
    success: false,
    quizzData: {}
}

export const GetQuizzSlice = createSlice({
    name: 'GetQuizzSlice',
    initialState,
    reducers: {
        fetchGetQuizz: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        },
        fetchGetQuizzSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.quizzData = action.payload;
        },
        fetchGetQuizzFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        }
    }
});

export const {
    fetchGetQuizz,
    fetchGetQuizzFailure,
    fetchGetQuizzSuccess
} = GetQuizzSlice.actions;

export default GetQuizzSlice.reducer;
