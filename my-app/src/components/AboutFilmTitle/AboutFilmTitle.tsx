import { NavLink } from "react-router-dom";
import BtnAboutFilm from "../ui/Buttons/BtnAboutFilm/BtnAboutFilm";
import BtnFavorites from "../ui/Buttons/BtnFavorites/BtnFavorites";
import BtnMix from "../ui/Buttons/BtnMix/BtnMix";
import BtnTrailer from "../ui/Buttons/BtnTrailer/BtnTrailer";
import style from "./AboutFilmTitle.module.css";

const AboutFilmTitle = ({ flag } :{flag:boolean} ) => {
    return (
        <div className={style.content}>
            <div className={style.info__wrapper}>
                <div className={style.info__rating}>
                    <img className={style.rating} src="/imgs/rating7.5.svg" alt="" />
                    <p className={style.info}>1979 детектив 1 ч 7 мин</p>
                </div>
                <h2 className={style.title}>Шерлок Холмс и доктор Ватсон: Знакомство</h2>
                <p className={style.description}>Увлекательные приключения самого известного сыщика всех времен</p>
                {flag ? (
                    <div className={style.btn__wrapper}>
                        <div className={style.btn__trailer}>
                            <BtnTrailer />
                        </div>
                        <div className={style.btn__not_trailer}>
                            <NavLink to={"/aboutFilm"}>
                                <BtnAboutFilm />
                            </NavLink>

                            <BtnFavorites />
                            <BtnMix />
                        </div>
                    </div>
                ) : (
                    <div className={style.btn__wrapper_2}>
                        <div className={style.btn__trailer_2}>
                            <BtnTrailer />
                        </div>
                        <div className={style.btn__not_trailer}>
                            <BtnFavorites />
                        </div>
                    </div>
                )}
            </div>

            <div className={style.info__background}></div>
        </div>
    );
};

export default AboutFilmTitle;