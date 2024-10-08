import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useMovieRandomQuery } from "../../api/cinemaGuideApi";
import { toggleModal } from "../../redux/modalTrailerSlice";
import BtnAboutFilm from "../ui/Buttons/BtnAboutFilm/BtnAboutFilm";
import BtnBrandActive from "../ui/Buttons/BtnBrandActive/BtnBrandActive";
import BtnFavorites from "../ui/Buttons/BtnFavorites/BtnFavorites";
import BtnMix from "../ui/Buttons/BtnMix/BtnMix";
import Loading from "../ui/Loading/Loading";
import ModalTrailer from "../ui/Modal/ModalTrailer/ModalTrailer";
import style from "./AboutFilmPoster.module.css";

const AboutFilmPosterRandom = () => {

    const dispatch = useDispatch();

    const { data, refetch, isFetching, error} = useMovieRandomQuery();

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

    const ratingColor = getRatingColor(data.tmdbRating);

    const handleMovieMix = () => {
        refetch();
    };

    return (
        <div className={style.content}>
            <div className={style.info__wrapper}>
            <div className={style.info__rating}>
                    <div className={style.rating} style={{ backgroundColor: ratingColor }}>
                        <img className={style.rating__star} src="/imgs/starRaiting.svg" alt="рейтинг" />
                        <div className={style.rating__number}>{data.tmdbRating}</div>
                    </div>

                    <div className={style.info}>
                        <span>{data?.releaseYear} year&nbsp; </span>
                        <div>
                            {data?.genres.map((item, index) => (
                                <span key={index}>({item})</span>
                            ))}
                        </div>
                        <div>&nbsp;{data?.runtime} min</div>
                    </div>
                </div>
                <h2 className={style.title}>{data?.title}</h2>
                <p className={style.description}>{data?.plot}</p>
                <ModalTrailer movie={data?.trailerYouTubeId}  />

                <div className={style.btn__wrapper}>
                    <div className={style.btn__trailer}>
                        <BtnBrandActive onClick={() => dispatch(toggleModal())}> Трейлер</BtnBrandActive>
                    </div>

                    <div className={style.btn__not_trailer}>
                        <NavLink to={`/aboutFilm/${data?.id}`}>
                            <BtnAboutFilm />
                        </NavLink>

                        <BtnFavorites id={data?.id} />
                        <BtnMix onClick={handleMovieMix} />
                    </div>
                </div>
            </div>
            <div className={style.info__background} style={{ backgroundImage: `url(${data?.backdropUrl})` }}></div>
        </div>
    );
}

export default AboutFilmPosterRandom;