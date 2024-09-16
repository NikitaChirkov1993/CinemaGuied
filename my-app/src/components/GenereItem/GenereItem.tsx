import { NavLink } from "react-router-dom";
import style from "./GenereItem.module.css";

const GenereItem = ({ imges, genere }) => {
    return (
        <li className={style.item}>
            <NavLink to={`/genere/${genere}`}>
                <img className={style.imges} src={imges} alt="" />
                <p className={style.text}>{genere}</p>
            </NavLink>
        </li>
    );
};

export default GenereItem;
