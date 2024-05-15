import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
    success: false,
    quizzListData: []
}

export const GetQuizzListSlice = createSlice({
    name: 'GetQuizzListSlice',
    initialState,
    reducers: {
        fetchGetQuizzList: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        },
        fetchGetQuizzListSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.quizzListData = action.payload;
        },
        fetchGetQuizzListFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        }
    }
});

export const {
    fetchGetQuizzList,
    fetchGetQuizzListFailure,
    fetchGetQuizzListSuccess
} = GetQuizzListSlice.actions;


