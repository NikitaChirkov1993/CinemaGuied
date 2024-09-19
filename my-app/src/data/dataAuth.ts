import email from "./../../public/imgs/authIcon/email.svg";
import emailError from "./../../public/imgs/authIcon/emailError.svg";
import login from "./../../public/imgs/authIcon/login.svg";
import loginError from "./../../public/imgs/authIcon/loginError.svg";
import nameSurname from "./../../public/imgs/authIcon/nameSurname.svg";
import nameSurnameError from "./../../public/imgs/authIcon/nameSurnameError.svg";



export const dataAuth = [
    {
        id: 1,
        img: email,
        imgError: emailError,
        placeholder: "Электронная почта",
    },
    {
        id: 2,
        img: nameSurname,
        imgError: nameSurnameError,
        placeholder1: "Имя",
        placeholder2: "Фамилия",
    },
    {
        id: 3,
        img: login,
        imgError: loginError,
        placeholder1: "Пароль",
        placeholder2: "Подтвердить пароль",
    },

]