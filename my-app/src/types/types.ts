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

export interface ResponseGlobal {
    code?: number;
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
export interface ResponseProfile {
    email: string;
    favorites: [];
    name: string;
    surname: string;
}
export interface BodyUserLogin {
    email: string;
    password: string;
}
export interface IerrorMassage {
    errorMassage: string;
    flagGlobal: boolean;
    flagPass: boolean;
    flagEmail: boolean;
}
export interface IerrorMassageLogin {
    errorMassage: string;
    flagGlobal: boolean;
    flagGlobal2: boolean;
}



export interface InputAuthProps {
    img: string;
    placeholder: string;
    type: string;
    isName: string;
    auth?: string;
    setAuth: React.Dispatch<React.SetStateAction<BodyUserRegister>>;
    errorMassage: IerrorMassage;
    setErrorMassage: React.Dispatch<React.SetStateAction<IerrorMassage>>;
  }
export interface InputLoginProps {
    img: string;
    placeholder: string;
    type: string;
    isName: string;
    isLogin: string;
    setIsLogin: React.Dispatch<React.SetStateAction<BodyUserLogin>>;
    errorMassage: IerrorMassageLogin;
    setErrorMassage: React.Dispatch<React.SetStateAction<IerrorMassageLogin>>;
  }
