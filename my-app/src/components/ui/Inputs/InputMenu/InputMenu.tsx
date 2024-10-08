import { ChangeEvent, useState } from "react";
import { dataTop5 } from "../../../../data/dataTop10";
import { getRatingColor } from "../../../../utils/utls";
import style from "./InputMenu.module.css";

const InputMenu = () => {
    const [inputTitle, setInputTitle] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputTitle(event.target.value);
    };

    const rootClassList = [style.list];
    if (inputTitle) {
        rootClassList.push(style.visible);
    }

    // const ratingColor = getRatingColor(data.tmdbRating);

    return (
        <div className={style.input__wrapper}>
            <img className={style.icon__serch} src="/imgs/search.svg" alt="Поиск" />
            <input value={inputTitle} onChange={handleChange} placeholder="Поиск" className={style.input__serch} type="text" />
            <img className={style.icon__close} onClick={() => setInputTitle("")} src="/imgs/inputMenuClose.svg " alt="Закрыть" />
            <ul className={rootClassList.join(" ")}>
                {dataTop5.map((item) => {
                     const ratingColor = getRatingColor(item.rating);
                    return (
                        <li className={style.item}>
                            <div className={style.poster}>{/* <img src="" alt="Постер" /> */}</div>

                            <div className={style.poster__infoWrapper}>
                                <div className={style.poster__info}>
                                    <div
                                        className={style.rating}
                                        style={{ backgroundColor: ratingColor }}
                                    >
                                        <img
                                            className={style.rating__star}
                                            src="/imgs/starRaiting.svg"
                                            alt="Рейтинг"
                                        />
                                        <div className={style.rating__number}>{
                                            item.rating}
                                        </div>
                                    </div>
                                    {/* <p className={style.rating}>{item.rating}</p> */}
                                    <div className={style.year}>{item.year}</div>
                                    <div className={style.genere}>{item.genere}</div>
                                    <div className={style.time}>{item.time} мин</div>
                                </div>
                                <h3 className={style.poster__title}>{item.title}</h3>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default InputMenu;
