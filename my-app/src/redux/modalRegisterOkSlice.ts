import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const modalRegisterOkSlice = createSlice({
    name: "modalRegisterOk",
    initialState: {
        isOpen: false
    },
    reducers: {
        openModalRegisterOk: (state) => {
            state.isOpen = true;
        },
        closeModalRegisterOk: (state) => {
            state.isOpen = false;
        },
        toggleModalRegisterOk: (state) => {
            state.isOpen = !state.isOpen;
        },

    },

});

export const { openModalRegisterOk, closeModalRegisterOk, toggleModalRegisterOk } = modalRegisterOkSlice.actions;
export const modalRegisterOkReducer = modalRegisterOkSlice.reducer;
export const selectModalRegisterOk = (state: RootState) => state.modalRegisterOk.isOpen;