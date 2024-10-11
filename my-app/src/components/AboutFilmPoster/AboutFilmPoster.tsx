import { FC } from "react";
import { useDispatch } from "react-redux";
import { useUserPofileQuery } from "../../api/cinemaGuideApi";
import { toggleModal } from "../../redux/modalTrailerSlice";
import { Movie } from "../../types/types";
import { getRatingColor } from "../../utils/utls";
import BtnBrandActive from "../ui/Buttons/BtnBrandActive/BtnBrandActive";
import BtnFavorites from "../ui/Buttons/BtnFavorites/BtnFavorites";
import BtnFavoritesNoAuth from "../ui/Buttons/BtnFavorites/BtnFavoritesNoAuth";
import ModalTrailer from "../ui/Modal/ModalTrailer/ModalTrailer";
import style from "./AboutFilmPoster.module.css";

interface AboutFilmPosterProps {
    dataMovieId: Movie;
}

const AboutFilmPoster:FC<AboutFilmPosterProps> = ({ dataMovieId }) => {
    const dispatch = useDispatch();


    const { data:dataProfile  } = useUserPofileQuery();

    const ratingColor = getRatingColor(dataMovieId.tmdbRating);

    const handleClickNOisFavorites = () => {
        if (!dataProfile) {
          alert("Это опция доступна только авторизованным пользователям");
        }
      };

    return (
        <div className={style.content}>
            <div className={style.info__wrapper}>
            <div className={style.info__rating}>
                    <div className={style.rating} style={{ backgroundColor: ratingColor }}>
                        <img className={style.rating__star} src="/imgs/starRaiting.svg" alt="рейтинг" />
                        <div className={style.rating__number}>{dataMovieId.tmdbRating}</div>
                    </div>

                    <div className={style.info}>
                        <span>{dataMovieId.releaseYear} year&nbsp; </span>
                        <div>
                            {dataMovieId.genres.map((item, index) => (
                                <span key={index}>({item})</span>
                            ))}
                        </div>
                        <div>&nbsp;{dataMovieId.runtime} min</div>
                    </div>
                </div>
                <h2 className={style.title}>{dataMovieId.title}</h2>
                <p className={style.description}>{dataMovieId.plot}</p>
                <ModalTrailer movie={dataMovieId.trailerYouTubeId} />

                <div className={style.btn__wrapper_2}>
                    <div className={style.btn__trailer_2}>
                        <BtnBrandActive onClick={() => dispatch(toggleModal())}> Трейлер</BtnBrandActive>
                    </div>

                    <div className={style.btn__not_trailer}>
                    {!dataProfile ?
                            <BtnFavoritesNoAuth onClick={handleClickNOisFavorites} />
                            :
                            <BtnFavorites id={dataMovieId?.id} />
                        }
                    </div>
                </div>
            </div>
            <div className={style.info__background} style={{ backgroundImage: `url(${dataMovieId.backdropUrl})` }}></div>
        </div>
    );
};

export default AboutFilmPoster;
