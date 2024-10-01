import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie } from "../types/types";

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
    })
});

export const { useMovieRandomQuery,useMovieTop10Query,useMovieIdQuery, } = cinemaGuideApi;
