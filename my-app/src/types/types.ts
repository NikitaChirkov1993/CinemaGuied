export interface Movie {
    keywords: string[];
    backdropUrl: string;
    production: string;
    trailerYouTubeId: string;
    language: string;
    tmdbRating: number;
    title: string;
    cast: string[];
    revenue: string;
    posterUrl: string;
    plot: string;
    genres: string[];
    id: number;
    budget: string;
    languages: string[];
    releaseDate: string;
    director: string;
    awardsSummary: string;
    runtime: number;
    trailerUrl: string;
    releaseYear: number;
    countriesOfOrigin: string[];
    originalTitle: string;
    searchL: string;
    homepage: string;
    status: string;
}
export interface MovieId {
    id: number;
}

export interface MovieQueryParams {
    count?: number;
    page?: number;
    title?: string;
    genre?: string;
}

export interface ResponseUserRegister {
    result?: boolean;
    error?: string;
}
export interface BodyUserRegister {
    email: string;
    password: string;
    name: string;
    surname: string;
    passwordRepeat?: "" ;
}
