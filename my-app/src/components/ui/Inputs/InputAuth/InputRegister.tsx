import React, { ChangeEvent, useState } from "react";
import { InputAuthProps } from "../../../../types/types";
import style from "./inputAuth.module.css";

const InputRegister: React.FC<InputAuthProps> = ({ img, type, placeholder, auth, setAuth, isName, setErrorMassage, errorMassage }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAuth((prev) => ({ ...prev, [isName]: e.target.value }));
        setErrorMassage((prev) => ({
            ...prev,
            flagGlobal: false,
            flagEmail: false,
            flagPass: false,
            errorMassage: "",
        }));

    };

    const [isFocused, setIsFocused] = useState(false); // Состояние для фокуса

    const rootClasses = [style.auth];
    const rootClassesImg = [style.img__auth];
    if (errorMassage?.flagGlobal && !auth) {
        rootClasses.push(style.activeError);
        rootClassesImg.push(style.activeErrorImg);
    }
    if (isFocused) {
        rootClasses.push(style.activeFocus);
    }
    if (errorMassage?.flagPass && (isName === "password" || isName === "passwordRepeat")) {
        rootClasses.push(style.activeError);
        rootClassesImg.push(style.activeErrorImg);
    }
    if (errorMassage?.flagEmail && isName === "email") {
        rootClasses.push(style.activeError);
        rootClassesImg.push(style.activeErrorImg);
    }

    return (
        <div className={rootClasses.join(" ")}>
            <img className={rootClassesImg.join(" ")} src={img} alt="icon" />
            <input
                value={auth}
                onChange={handleChange}
                placeholder={placeholder}
                className={style.input__auth}
                type={type}
                onFocus={()=> setIsFocused(true)} // Добавляем обработчик фокуса
                onBlur={()=> setIsFocused(false)} // Добавляем обработчик потери фокуса
            />
        </div>
    );
};

export default InputRegister;
