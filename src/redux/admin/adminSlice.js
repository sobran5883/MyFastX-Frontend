import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentAdmin: null,
    error: null,
    loading:false,
};

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        signInSuccess: (state, action) => {
            state.currentAdmin = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        deleteAdminStart: (state) => {
            state.loading = true;
            state.error = null; 
        },
        deleteAdminSuccess: (state) => {
            state.currentAdmin = null;
            state.loading = false;
            state.error = null;
        },
        deleteAdminFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        signOutAdminStart: (state) => { 
            state.loading = true;
            state.error = null; 
        },
        signOutAdminSuccess: (state) => {
            state.currentAdmin = null;
            state.loading = false;
            state.error = null;
        },
        signOutAdminFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    }
});

export const {
     signInStart, signInSuccess, signInFailure,
    signOutAdminFailure, signOutAdminStart, signOutAdminSuccess,
    deleteAdminFailure, deleteAdminSuccess, deleteAdminStart,} = adminSlice.actions;

export default adminSlice.reducer;