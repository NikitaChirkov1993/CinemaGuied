import { NavLink } from "react-router-dom";
import style from "./GenereItem.module.css";

const GenereItem = ({ genere }) => {

    return (
        <NavLink className={style.link} to={`/genere/${genere}`}>
            <li className={style.item}>
                {/* <img className={style.imges} src="./../../../public/imgs/no.png" alt="" /> */}
                <p className={style.text}>{genere}</p>
            </li>
        </NavLink>
    );
};

export default GenereItem;
