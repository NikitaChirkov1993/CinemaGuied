import { configureStore } from "@reduxjs/toolkit";
import { cinemaGuideApi } from "../api/cinemaGuideApi";

export const store = configureStore({
    reducer: {
        [cinemaGuideApi.reducerPath]: cinemaGuideApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cinemaGuideApi.middleware),
})