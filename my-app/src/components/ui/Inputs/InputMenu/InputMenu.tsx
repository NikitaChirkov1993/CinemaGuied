import { ChangeEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import { useMovieQuery } from "../../../../api/cinemaGuideApi";
import { getRatingColor } from "../../../../utils/utls";
import Loading from "../../Loading/Loading";
import style from "./InputMenu.module.css";

const InputMenu = ({setIsSearchVisible,isSearchVisible}) => {
    const [inputTitle, setInputTitle] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputTitle(event.target.value);
    };

    const rootClassList = [style.list];
    if (inputTitle) {
        rootClassList.push(style.visible);
    }

    const { data, isLoading, refetch, error } = useMovieQuery({
        title: inputTitle,
        count: 5,
    });
    if (isLoading) {
        return <Loading />; // Можно отобразить индикатор загрузки
    }
    if (error) {
        return <div>Error: {error.message}</div>; // Обработка ошибок
    }

    if (!data) {
        return <div>No data available</div>; // Если данные все еще недоступны
    }
    console.log(data, "sdjkfjlkdsjfs");

    const handleClose = () => {
        setInputTitle("");
        setIsSearchVisible(!isSearchVisible);
    }


    return (
        <div className={style.input__wrapper}>
            <img className={style.icon__serch} src="/imgs/search.svg" alt="Поиск" />
            <input value={inputTitle} onChange={handleChange} placeholder="Поиск" className={style.input__serch} type="text" />
            <img className={style.icon__close} onClick={handleClose} src="/imgs/inputMenuClose.svg " alt="Закрыть" />
            <ul className={rootClassList.join(" ")}>
                {data?.length === 0 && (<div className={style.noFilm}>Совпадений не найдено!</div>)}
                {data.map((item) => {
                    const ratingColor = getRatingColor(item.tmdbRating);
                    return (
                        <NavLink key={item.id} to={`/aboutFilm/${item.id}`}>
                            <li className={style.item}>
                                <div className={style.poster}>

                                    {item.posterUrl ?
                                        <img className={style.poster__img} src={item.posterUrl} alt="Постер" />
                                        :
                                        <img className={style.poster__img} src="/imgs/no3.webp" alt="filmNO" />
                                    }

                                </div>

                                <div className={style.poster__infoWrapper}>
                                    <div className={style.poster__info}>
                                        <div className={style.rating} style={{ backgroundColor: ratingColor }}>
                                            <img className={style.rating__star} src="/imgs/starRaiting.svg" alt="Рейтинг" />
                                            <div className={style.rating__number}>{item.tmdbRating}</div>
                                        </div>
                                        <div className={style.year}>{item.releaseYear}</div>
                                        <div className={style.genere}>{item.genres.join(",")}</div>
                                        <div className={style.time}>{item.runtime} мин</div>
                                    </div>
                                    <h3 className={style.poster__title}>{item.title}</h3>
                                </div>
                            </li>
                        </NavLink>
                    );
                })}
            </ul>
        </div>
    );
};

export default InputMenu;
