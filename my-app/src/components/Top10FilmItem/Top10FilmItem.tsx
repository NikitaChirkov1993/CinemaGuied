import { NavLink } from "react-router-dom";
import style from "./Top10FilmItem.module.css";

const Top10FilmItem = ({ imges,id }: { imges: string, id:number }) => {


    return (
        <li className={style.item}>
            <NavLink to={`/aboutFilm/${id}`}>
                {imges ? <img className={style.item__img} src={imges} alt="film" /> : <img className={style.item__img} src="./../../../public/imgs/no3.webp" alt="filmNO" /> }

            </NavLink>
        </li>
    );
};

export default Top10FilmItem;
