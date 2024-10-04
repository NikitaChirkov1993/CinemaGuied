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

    const [userRegister, { isError, isSuccess, error,reset }] = useUserRegisterMutation();
    const dispatch = useDispatch();
    const isModalRegister = useSelector(selectModalRegister);

    const [errorMassage, setErrorMassage] = useState({
        massagePassword: "",
        massageUser: "",
        emailError: false,
        nameError: false,
        surnameError: false,
        passwordError: false,
        passwordRepeatError: false,
    });

    const handleuserRegister = async () => {
        let hasError = false;
        // Проверяем, заполнены ли все поля
        if (!isRegister.email) {
            setErrorMassage((prev) => ({ ...prev, emailError: true }));
            hasError = true;
        }
        if (!isRegister.name) {
            setErrorMassage((prev) => ({ ...prev, nameError: true }));
            hasError = true;
        }
        if (!isRegister.surname) {
            setErrorMassage((prev) => ({ ...prev, surnameError: true }));
            hasError = true;
        }
        if (!isRegister.password) {
            setErrorMassage((prev) => ({ ...prev, passwordError: true }));
            hasError = true;
        }
        if (!isRegister.passwordRepeat) {
            setErrorMassage((prev) => ({ ...prev, passwordRepeatError: true }));
            hasError = true;
        }

        // Проверяем, совпадают ли пароли
        if (isRegister.password !== isRegister.passwordRepeat) {
            setErrorMassage((prev) => ({
                ...prev,
                massagePassword: "Пароли не совпадают",
                passwordError: true,
                passwordRepeatError: true,
            }));
            hasError = true;
        }
        if (error) {
            setErrorMassage((prev) => ({
                ...prev,
                massageUser: "Такой пользователь уже существует",
                passwordError: true,
                passwordRepeatError: true,
                emailError: true,
                nameError: true,
                surnameError: true,
            }));
            hasError = true;
        }

        if (!hasError) {
            try {
                await userRegister(isRegister).unwrap();
                setIsRegister({
                    email: "",
                    name: "",
                    surname: "",
                    password: "",
                    passwordRepeat: "",
                });
                dispatch(closeModalRegister());
                dispatch(openModalRegisterOk()); // Открытие модального окна логина
            } catch (error) {
                console.log("Ошибка при регистрации");
                reset();
            }
        }
    };

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
                        {/* {error && <span className={style.massage}>Такой пользователь уже существует</span>} */}
                        {errorMassage.massagePassword && <span className={style.massage}>{errorMassage.massagePassword}</span>}
                        {errorMassage.massageUser && <span className={style.massage}>{errorMassage.massageUser}</span>}
                        <InputAuth
                            auth={isRegister.email}
                            setAuth={setIsRegister}
                            isName={"email"}
                            img={dataAuth[0].img}
                            placeholder={dataAuth[0].placeholder}
                            hasError={errorMassage.emailError}
                            setErrorMassage={setErrorMassage}
                        />
                        <InputAuth
                            auth={isRegister.name}
                            setAuth={setIsRegister}
                            isName={"name"}
                            img={dataAuth[1].img}
                            placeholder={dataAuth[1].placeholder1}
                            hasError={errorMassage.nameError}
                            setErrorMassage={setErrorMassage}
                        />
                        <InputAuth
                            auth={isRegister.surname}
                            setAuth={setIsRegister}
                            isName={"surname"}
                            img={dataAuth[1].img}
                            placeholder={dataAuth[1].placeholder2}
                            hasError={errorMassage.surnameError}
                            setErrorMassage={setErrorMassage}
                        />
                        <InputAuth
                            auth={isRegister.password}
                            setAuth={setIsRegister}
                            isName={"password"}
                            img={dataAuth[2].img}
                            placeholder={dataAuth[2].placeholder1}
                            hasError={errorMassage.passwordError}
                            setErrorMassage={setErrorMassage}
                        />
                        <InputAuth
                            auth={isRegister.passwordRepeat}
                            setAuth={setIsRegister}
                            isName={"passwordRepeat"}
                            img={dataAuth[2].img}
                            placeholder={dataAuth[2].placeholder2}
                            hasError={errorMassage.passwordRepeatError}
                            setErrorMassage={setErrorMassage}
                        />
                    </div>
                    <BtnBrandActive onClick={handleuserRegister}>Создать аккаунт</BtnBrandActive>
                    <div
                        onClick={() => {
                            dispatch(closeModalRegister());
                            dispatch(openModalLogin());
                        }}
                        className={style.auth__text}>
                        У меня есть пароль
                    </div>
                </div>
                <img onClick={() => dispatch(closeModalRegister())} className={style.imges__close} src={dataAuth[0].imgClose} alt="Закрыть" />
            </div>
        </div>
    );
};

export default ModalRegister;
