import { configureStore } from "@reduxjs/toolkit";
import { cinemaGuideApi } from "../api/cinemaGuideApi";
import { modalTrailerReducer } from "./modalTrailerSlice";

export const store = configureStore({
    reducer: {
        modalTrailer: modalTrailerReducer,
        [cinemaGuideApi.reducerPath]: cinemaGuideApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cinemaGuideApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
