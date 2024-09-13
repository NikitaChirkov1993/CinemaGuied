import style from "./Top10FilmItem.module.css";

const Top10FilmItem = ({ imges }) => {
    return (
        <li className={style.item}>
            <img src={imges} alt="film" />
        </li>
    );
};

export default Top10FilmItem;
