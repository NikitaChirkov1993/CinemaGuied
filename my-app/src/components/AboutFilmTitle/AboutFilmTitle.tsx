import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMovieRandomQuery } from "../../redux/cinemaGuideApi";
import BtnAboutFilm from "../ui/Buttons/BtnAboutFilm/BtnAboutFilm";
import BtnBrandActive from "../ui/Buttons/BtnBrandActive/BtnBrandActive";
import BtnFavorites from "../ui/Buttons/BtnFavorites/BtnFavorites";
import BtnMix from "../ui/Buttons/BtnMix/BtnMix";
import ModalTrailer from "../ui/Modal/ModalTrailer/ModalTrailer";
import style from "./AboutFilmTitle.module.css";

const AboutFilmTitle = ({ flag }: { flag: boolean }) => {
    const [modalTrailer, setModalTrailer] = useState(false);

    const { data, isLoading,error,refetch } = useMovieRandomQuery();
    console.log(data, "data");
    if (isLoading) {
        return <div>Loading...</div>; // Можно отобразить индикатор загрузки
    }
    if (error) {
        return <div>Error: {error.message}</div>; // Обработка ошибок
    }

    if (!data) {
        return <div>No data available</div>; // Если данные все еще недоступны
    }

    const handleMovieMix = () => {
       refetch()
    }

    return (
        <div className={style.content}>
            <div className={style.info__wrapper}>
                <div className={style.info__rating}>
                    <img className={style.rating} src="/imgs/rating7.5.svg" alt="рейтинг" />
                    <p className={style.info}>
                        <p>{data.releaseYear} year,&nbsp; </p>

                        {data.genres.map((item) =>
                            <p>&nbsp;{ item} - </p>
                        )}
                        {data.runtime} min.</p>
                </div>
                <h2 className={style.title}>{ data.title}</h2>
                <p className={style.description}>{ data.plot}</p>
                <ModalTrailer
                    movie={data.trailerYouTubeId
                    }
                    modalTrailer={modalTrailer}
                    setModalTrailer={setModalTrailer}
                />
                {flag ? (
                    <div className={style.btn__wrapper}>
                        <div className={style.btn__trailer}>
                            <BtnBrandActive onClick={() => setModalTrailer(true)}> Трейлер</BtnBrandActive>
                        </div>

                        <div className={style.btn__not_trailer}>
                            <NavLink to={"/aboutFilm"}>
                                <BtnAboutFilm />
                            </NavLink>

                            <BtnFavorites />
                            <BtnMix onClick={handleMovieMix} />
                        </div>
                    </div>
                ) : (
                    <div className={style.btn__wrapper_2}>
                        <div className={style.btn__trailer_2}>
                            <BtnBrandActive onClick={() => setModalTrailer(true)}>Трейлер</BtnBrandActive>
                        </div>
                        <div className={style.btn__not_trailer}>
                            <BtnFavorites />
                        </div>
                    </div>
                )}
            </div>

            <div
                className={style.info__background}
                style={{ backgroundImage: `url(${data.backdropUrl})` }}
            >
            </div>
        </div>
    );
};

export default AboutFilmTitle;
