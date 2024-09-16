import { NavLink } from "react-router-dom";
import style from "./Top10FilmItem.module.css";

const Top10FilmItem = ({ imges }) => {
    return (
        <li className={style.item}>
            <NavLink to={"/aboutFilm"}>
                <img src={imges} alt="film" />
            </NavLink>
        </li>
    );
};

export default Top10FilmItem;
