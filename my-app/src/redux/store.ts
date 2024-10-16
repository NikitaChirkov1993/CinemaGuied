import { configureStore } from "@reduxjs/toolkit";
import { cinemaGuideApi } from "../api/cinemaGuideApi";
import { isSearchVisibleReducer } from "./isSearchVisible";
import { modalLoginReducer } from "./modalLoginSlice";
import { modalRegisterOkReducer } from "./modalRegisterOkSlice";
import { modalRegisterReducer } from "./modalRegisterSlice";
import { modalTrailerReducer } from "./modalTrailerSlice";

export const store = configureStore({
    reducer: {
        modalTrailer: modalTrailerReducer,
        modalLogin: modalLoginReducer,
        modalRegister: modalRegisterReducer,
        modalRegisterOk: modalRegisterOkReducer,
        isSearchVisible:isSearchVisibleReducer,
        [cinemaGuideApi.reducerPath]: cinemaGuideApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cinemaGuideApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
