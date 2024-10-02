import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie, MovieQueryParams } from "../types/types";

export const cinemaGuideApi = createApi({
    reducerPath: "cinemaGuideApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://cinemaguide.skillbox.cc/",
    }),
    endpoints: (build) => ({
        movieRandom: build.query<Movie,void>({
            query: () => "/movie/random",

        }),
        movieTop10: build.query<Movie[],void>({
            query: () => "/movie/top10",
        }),
        movieId: build.query<Movie,number>({
            query: (movieId) => `/movie/${movieId}`,
        }),
        movieGenere: build.query<[],void>({
            query: () => "/movie/genres",
        }),
        movie: build.query<Movie[],MovieQueryParams>({
            query: ({ count = 50, page = 1, title, genre }) => {
                // Создаем параметры строки запроса
        const params = new URLSearchParams();

        // Добавляем параметры в строку запроса, если они переданы
        if (count) params.append('count', count.toString());
        if (page) params.append('page', page.toString());
        if (title) params.append('title', title);
        if (genre) params.append('genre', genre);

        return `/movie?${params.toString()}`; // Возвращаем запрос с параметрами
            },
        }),
    })
});

export const { useMovieRandomQuery,useMovieTop10Query,useMovieIdQuery,useMovieGenereQuery,useMovieQuery } = cinemaGuideApi;
