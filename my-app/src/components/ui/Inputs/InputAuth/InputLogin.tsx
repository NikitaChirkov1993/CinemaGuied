import { ChangeEvent, useState } from "react";
import { InputLoginProps } from "../../../../types/types";
import style from "./InputAuth.module.css";

const InputLogin: React.FC<InputLoginProps> = ({img,placeholder,type,isName,isLogin,setIsLogin,errorMassage,setErrorMassage}) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsLogin((prev) => ({ ...prev, [isName]: e.target.value }));
        setErrorMassage((prev) => ({
            ...prev,
            errorMassage: "",
            flagGlobal: false,
        }));

    };

    const [isFocused, setIsFocused] = useState(false); // Состояние для фокуса

    const rootClasses = [style.auth];
    const rootClassesImg = [style.img__auth];
    if (errorMassage?.flagGlobal && !isLogin ) {
        rootClasses.push(style.activeError);
        rootClassesImg.push(style.activeErrorImg);
    }
    if (isFocused) {
        rootClasses.push(style.activeFocus);
    }



    return (
        <div className={rootClasses.join(" ")}>
            <img className={rootClassesImg.join(" ")} src={img} alt="icon" />
            <input
                value={isLogin}
                onChange={handleChange}
                placeholder={placeholder}
                className={style.input__auth}
                type={type}
                onFocus={()=> setIsFocused(true)} // Добавляем обработчик фокуса
                onBlur={()=> setIsFocused(false)} // Добавляем обработчик потери фокуса
            />
        </div>
    );
}

export default InputLogin;