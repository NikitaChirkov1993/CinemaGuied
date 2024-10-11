import { ButtonHTMLAttributes, FC } from "react";
import style from "./BtnBrandActive.module.css";

interface BtnBrandActiveProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const BtnBrandActive: FC<BtnBrandActiveProps> = ({children, ...props}) => {
    return (
        <button {...props} className={style.btn__trailer}>
            {children}
        </button>
     );
}

export default BtnBrandActive;