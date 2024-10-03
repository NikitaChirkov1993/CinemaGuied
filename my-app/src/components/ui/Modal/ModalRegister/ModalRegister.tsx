import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUserRegisterMutation } from "../../../../api/cinemaGuideApi";
import { dataAuth } from "../../../../data/dataAuth";
import { openModalLogin } from "../../../../redux/modalLoginSlice";
import { openModalRegisterOk } from "../../../../redux/modalRegisterOkSlice";
import { closeModalRegister, selectModalRegister } from "../../../../redux/modalRegisterSlice";
import { BodyUserRegister } from "../../../../types/types";
import BtnBrandActive from "../../Buttons/BtnBrandActive/BtnBrandActive";
import InputAuth from "../../Inputs/InputAuth/InputAuth";
import style from "./ModalRegister.module.css";

const ModalRegister = () => {
    const [isRegister, setIsRegister] = useState<BodyUserRegister>({
        email: "",
        name: "",
        surname: "",
        password: "",
        passwordRepeat: "",
    });

    const [userRegister, { isError, isSuccess, error }] = useUserRegisterMutation();
    if (isSuccess) {
        console.log("Всё прошло успешно аккаунт создан!");
    }
    if (isError) {
        console.log("Пороли не совподают!");
    }

    const handleuserRegister = async () => {
        if (userRegister) {
            if (isRegister.password !== isRegister.passwordRepeat) {
                console.log("Пороли не совподают!");
                return;
            }
            await userRegister(isRegister).unwrap();
            dispatch(closeModalRegister());
            dispatch(openModalRegisterOk());
        }
    };

    console.log(isRegister, "isRegister");
    if (isRegister.password === isRegister.passwordRepeat) {
        console.log("Равны");
    }
    if (isRegister.password !== isRegister.passwordRepeat) {
        console.log("НЕЕЕРавны");
    }

    const dispatch = useDispatch();
    const isModalRegister = useSelector(selectModalRegister);

    const rootClasses = [style.myModal];
    if (isModalRegister) {
        rootClasses.push(style.active);
    }
    return (
        <div className={rootClasses.join(" ")} onClick={() => dispatch(closeModalRegister())}>
            <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
                <div className={style.auth__wrapper}>
                    <img className={style.auth__logo} src="/imgs/logo.svg" alt="Логотип" />
                    <h3 className={style.regitser__title}>Регистрация</h3>
                    <div className={style.authInput__wrapper}>
                        {error && <span className={style.massage}>Такой пользователь уже существует</span>}
                        {isRegister.password !== isRegister.passwordRepeat && <span className={style.massage}>Такой пользователь уже существует</span>}
                        <InputAuth auth={isRegister.email} setAuth={setIsRegister} isName={"email"} img={dataAuth[0].img} placeholder={dataAuth[0].placeholder} />
                        <InputAuth auth={isRegister.name} setAuth={setIsRegister} isName={"name"} img={dataAuth[1].img} placeholder={dataAuth[1].placeholder1} />
                        <InputAuth auth={isRegister.surname} setAuth={setIsRegister} isName={"surname"} img={dataAuth[1].img} placeholder={dataAuth[1].placeholder2} />
                        <InputAuth auth={isRegister.password} setAuth={setIsRegister} isName={"password"} img={dataAuth[2].img} placeholder={dataAuth[2].placeholder1} />
                        <InputAuth
                            auth={isRegister.passwordRepeat}
                            setAuth={setIsRegister}
                            isName={"passwordRepeat"}
                            img={dataAuth[2].img}
                            placeholder={dataAuth[2].placeholder2}
                        />
                    </div>
                    <BtnBrandActive
                        onClick={() => {
                            {
                                handleuserRegister();
                            }
                        }}>
                        Создать аккаунт
                    </BtnBrandActive>
                    <div
                        onClick={() => {
                            dispatch(closeModalRegister());
                            dispatch(openModalLogin());
                        }}
                        className={style.auth__text}>
                        У меня есть пароль
                    </div>
                </div>
                <img
                    onClick={() => {
                        dispatch(closeModalRegister());
                    }}
                    className={style.imges__close}
                    src={dataAuth[0].imgClose}
                    alt="Закрыть"
                />
            </div>
        </div>
    );
};

export default ModalRegister;
