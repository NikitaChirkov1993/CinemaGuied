import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie } from "../types/types";

export const cinemaGuideApi = createApi({
    reducerPath: "cinemaGuideApi",
    tagTypes: ["cinemaGuide"],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://cinemaguide.skillbox.cc/",
        prepareHeaders: (headers) => {
            headers.set('Accept-Language', 'russian'); // Добавляем заголовок для запроса данных на русском
            return headers;
        }
    }),
    endpoints: (build) => ({
        movieRandom: build.query<Movie[],void>({
            query: () => "/movie/random?language=russian",

        }),
    })
});

export const { useMovieRandomQuery } = cinemaGuideApi;
