import { ButtonHTMLAttributes, FC } from "react";
import style from "./BtnRandom.module.css";

interface BtnRandomProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

const BtnRandom:FC<BtnRandomProps> = ({...props}) => {
    return (
        <button {...props} className={style.mix}>
            <img src="/imgs/mix.svg" alt="Перемешать" />
        </button>
    );
};

export default BtnRandom;
