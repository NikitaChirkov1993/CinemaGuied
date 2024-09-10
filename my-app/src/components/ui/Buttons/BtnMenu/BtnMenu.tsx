import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import style from "./BtnMenu.module.css";

interface BtnMenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

const BtnMenu: FC<BtnMenuProps> = ({ children, ...props }) => {
    return (
        <button className={style.btn} {...props} type="button">
            {children}
        </button>
    );
};

export default BtnMenu;
