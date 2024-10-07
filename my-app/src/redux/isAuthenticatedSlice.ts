import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const isAuthenticatedSlice = createSlice({
    name: "isAuthenticated",
    initialState: {
        isAuth: true,
    },
    reducers: {

        isAuthtrue: (state) => {
            state.isAuth = true;
        },
        isAuthfalse: (state) => {
            state.isAuth = false;
        },

    },

});

export const {isAuthtrue,isAuthfalse } = isAuthenticatedSlice.actions;
export const isAuthReducer = isAuthenticatedSlice.reducer;
export const selectisAuth= (state: RootState) => state.isAuth.isAuth;