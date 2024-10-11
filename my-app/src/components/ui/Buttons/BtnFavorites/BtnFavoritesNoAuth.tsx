import { ButtonHTMLAttributes, FC } from "react";
import style from "./BtnFavorites.module.css";

interface BtnFavoritesNoAuthProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

const BtnFavoritesNoAuth:FC<BtnFavoritesNoAuthProps> = ({...props}) => {
    return (
        <button {...props} className={style.favorites}>
            <img src="/imgs/on=false.svg" alt="Не в избранном" />
        </button>
     );
}

export default BtnFavoritesNoAuth;