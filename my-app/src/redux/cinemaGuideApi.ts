import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie } from "../types/types";

export const cinemaGuideApi = createApi({
    reducerPath: "cinemaGuideApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://cinemaguide.skillbox.cc/",
        prepareHeaders: (headers) => {
            headers.set('Accept-Language', 'ru'); // Устанавливаем заголовок для русского
            return headers;
        }
    }),
    endpoints: (build) => ({
        movieRandom: build.query<Movie[],void>({
            query: () => "/movie/random?language=ru",

        }),
    })
});

export const { useMovieRandomQuery } = cinemaGuideApi;
