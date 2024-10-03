import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const modalRegisterSlice = createSlice({
    name: "modalRegister",
    initialState: {
        isOpen: false
    },
    reducers: {
        openModalRegister: (state) => {
            state.isOpen = true;
        },
        closeModalRegister: (state) => {
            state.isOpen = false;
        },
        toggleModalRegister: (state) => {
            state.isOpen = !state.isOpen;
        },

    },

});

export const { openModalRegister, closeModalRegister, toggleModalRegister } = modalRegisterSlice.actions;
export const modalRegisterReducer = modalRegisterSlice.reducer;
export const selectModalRegister = (state: RootState) => state.modalRegister.isOpen;