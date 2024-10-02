import { NavLink } from "react-router-dom";
import style from "./GenereLocalItem.module.css";

const GenereLocalItem = ({ imges, id }) => {


    return (
        <NavLink className={style.link} to={`/aboutFilm/${id}`}>
            <li className={style.item}>
                <img className={style.imges} src={imges} alt="" />
            </li>
            {/* <h2 className={style.title}>Названеие :{id}</h2> */}
        </NavLink>
    );
};

export default GenereLocalItem;
