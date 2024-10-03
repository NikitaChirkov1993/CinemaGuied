import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const modalLoginSlice = createSlice({
    name: "modalLogin",
    initialState: {
        isOpen: false
    },
    reducers: {
        openModalLogin: (state) => {
            state.isOpen = true;
        },
        closeModalLogin: (state) => {
            state.isOpen = false;
        },
        toggleModalLogin: (state) => {
            state.isOpen = !state.isOpen;
        },

    },

});

export const { openModalLogin, closeModalLogin, toggleModalLogin } = modalLoginSlice.actions;
export const modalLoginReducer = modalLoginSlice.reducer;
export const selectModalLogin = (state: RootState) => state.modalLogin.isOpen;