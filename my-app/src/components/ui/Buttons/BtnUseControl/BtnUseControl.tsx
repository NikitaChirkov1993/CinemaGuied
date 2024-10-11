import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import style from "./BtnUseControl.module.css";

interface BtnUseControlProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

const BtnUseControl:FC<BtnUseControlProps> = ({ children }) => {
    return (
        <button className={style.btn}>
            {children}
        </button>
    );
}

export default BtnUseControl;