import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    error: null,
    loading:false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getOtpStart: (state) => {
            state.loading = true;
            state.error = null; // Resetting error when OTP verification starts
        },
        getOtpSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        getOtpFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        verifyOtpStart: (state) => {
            state.loading = true;
            state.error = null; // Resetting error when OTP verification starts
        },
        verifyOtpSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        verifyOtpFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        signInStart: (state) => {
            state.loading = true;
            state.error = null; // Resetting error when sign-in starts
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        deleteUserStart: (state) => {
            state.loading = true;
            state.error = null; // Resetting error when user deletion starts
        },
        deleteUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        },
        deleteUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        signOutUserStart: (state) => { // Corrected parameter name to "state"
            state.loading = true;
            state.error = null; // Resetting error when sign-out starts
        },
        signOutUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        },
        signOutUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    }
});

export const { getOtpStart, getOtpSuccess, getOtpFailure,
    verifyOtpStart, verifyOtpSuccess, verifyOtpFailure,
     signInStart, signInSuccess, signInFailure,
    signOutUserFailure, signOutUserStart, signOutUserSuccess,
    deleteUserFailure, deleteUserSuccess, deleteUserStart,} = userSlice.actions;

export default userSlice.reducer;