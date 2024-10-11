import { FC } from "react";
import style from "./BtnAboutFilm.module.css";

const BtnAboutFilm: FC = () => {
    return ( <button className={style.btn__film}>О фильме</button> );
}

export default BtnAboutFilm;