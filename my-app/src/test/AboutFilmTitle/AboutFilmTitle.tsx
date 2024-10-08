import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useMovieIdQuery, useMovieRandomQuery } from "../../api/cinemaGuideApi";
import BtnAboutFilm from "../ui/Buttons/BtnAboutFilm/BtnAboutFilm";
import BtnBrandActive from "../ui/Buttons/BtnBrandActive/BtnBrandActive";
import BtnFavorites from "../ui/Buttons/BtnFavorites/BtnFavorites";
import BtnMix from "../ui/Buttons/BtnMix/BtnMix";
import Loading from "../ui/Loading/Loading";
import ModalTrailer from "../ui/Modal/ModalTrailer/ModalTrailer";
import style from "./AboutFilmTitle.module.css";

const AboutFilmTitle = ({ flag }: { flag: boolean }) => {
    const [modalTrailer, setModalTrailer] = useState(false);
    const { id } = useParams<{ id: string }>();
    const movieId = Number(id);

    const { data: randomMovieData, refetch: refetchrandomMovie, isLoading: isLoadingRandom, error: errorRandom } = useMovieRandomQuery();
    console.log(randomMovieData, "randomMovieData");

    const { data, isFetching, error } = useMovieIdQuery(movieId);

    // console.log(data, "data");
    if (isLoadingRandom) {
        return <Loading />; // Можно отобразить индикатор загрузки
    }

    if (!randomMovieData) {
        return <div>No data available2323232</div>; // Если данные все еще недоступны
    }

    if (errorRandom) {
        return <div>Error: {error.message}</div>;
        // Обработка ошибок
    }

    if (isFetching) {
        return <Loading />; // Можно отобразить индикатор загрузки
    }
    if (error) {
        return <div>Error: {error.message}</div>;
        // Обработка ошибок
    }

    if (!data) {
        return <div>No data available</div>; // Если данные все еще недоступны
    }
    // Логика определения цвета рейтинга
    const getRatingColor = (rating: number) => {
        if (rating >= 0 && rating <= 4.2) return "#c82020";
        if (rating > 4.3 && rating <= 6.3) return "#777";
        if (rating > 6.3 && rating <= 7.5) return "#308e21";
        if (rating > 7.5 && rating <= 10) return "#a59400";
        return "black"; // значение по умолчанию, если вдруг рейтинг вне ожидаемых границ
    };

    const ratingColor = getRatingColor(randomMovieData.tmdbRating);

    const handleMovieMix = () => {
        refetchrandomMovie();
    };

    return (
        <div className={style.content}>
            <div className={style.info__wrapper}>
                <h2 className={style.title}>{randomMovieData?.title}</h2>
                <p className={style.description}>{randomMovieData?.plot}</p>
                <ModalTrailer movie={randomMovieData?.trailerYouTubeId} modalTrailer={modalTrailer} setModalTrailer={setModalTrailer} />
                <div className={style.info__rating}>
                    <div className={style.rating} style={{ backgroundColor: ratingColor }}>
                        <img className={style.rating__star} src="/imgs/starRaiting.svg" alt="рейтинг" />
                        <div className={style.rating__number}>{randomMovieData.tmdbRating}</div>
                    </div>

                    <div className={style.info}>
                        <span>{randomMovieData?.releaseYear} year&nbsp; </span>
                        <div>
                            {randomMovieData?.genres.map((item, index) => (
                                <span key={index}>({item})</span>
                            ))}
                        </div>
                        <div>&nbsp;{randomMovieData?.runtime} min</div>
                    </div>
                </div>
                <div className={style.btn__wrapper}>
                    <div className={style.btn__trailer}>
                        <BtnBrandActive onClick={() => setModalTrailer(true)}> Трейлер</BtnBrandActive>
                    </div>

                    <div className={style.btn__not_trailer}>
                        <NavLink to={`/aboutFilm/${randomMovieData?.id}`}>
                            <BtnAboutFilm />
                        </NavLink>

                        <BtnFavorites />
                        <BtnMix onClick={handleMovieMix} />
                    </div>
                </div>
            </div>
            <div className={style.info__background} style={{ backgroundImage: `url(${randomMovieData?.backdropUrl})` }}></div>
        </div>
    );
};

export default AboutFilmTitle;
