import { NavLink } from "react-router-dom";
import style from "./FavoritesItem.module.css";

const FavoritesItem = ({ imges }) => {

    const handeleDelete = () => {
        console.log("Удалить фильм");

    }
    return (
        <li  className={style.item}>
            <div className={style.wrapper}>
                <NavLink to={"/aboutFilm"}>
                    <img className={style.imges} src="/imgs/filmBackground/sherlock.png" alt="Аватар фильма" />
                </NavLink>
                    <div onClick={handeleDelete} className={style.icon__delete}>
                        <img src="./../../../public/imgs/delete.svg" alt="" />
                    </div>
            </div>
        </li>
    );
};

export default FavoritesItem;
