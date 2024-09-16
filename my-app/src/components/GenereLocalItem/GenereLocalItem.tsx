import { NavLink } from "react-router-dom";
import style from "./GenereLocalItem.module.css";

const GenereLocalItem = ({ imges, id }) => {
    return (
        <NavLink className={style.link} to={"/aboutFilm"}>
            <h2 className={style.title}>Названеие :{id}</h2>
            <li className={style.item}>
                <img className={style.imges} src={imges} alt="" />
            </li>
        </NavLink>
    );
};

export default GenereLocalItem;
