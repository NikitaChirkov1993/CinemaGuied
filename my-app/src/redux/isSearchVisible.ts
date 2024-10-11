import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const isSearchVisibleSlice = createSlice({
    name: "isSearchVisible",
    initialState: {
        isOpen: false
    },
    reducers: {

        toggleIsSearchVisible: (state) => {
            state.isOpen = !state.isOpen;
        },

    },

});

export const {toggleIsSearchVisible } = isSearchVisibleSlice.actions;
export const isSearchVisibleReducer = isSearchVisibleSlice.reducer;
export const selectisSearchVisible = (state: RootState) => state.isSearchVisible.isOpen;