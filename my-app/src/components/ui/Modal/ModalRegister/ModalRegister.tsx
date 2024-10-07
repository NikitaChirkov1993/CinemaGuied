import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUserRegisterMutation } from "../../../../api/cinemaGuideApi";
import { dataAuth } from "../../../../data/dataAuth";
import { openModalLogin } from "../../../../redux/modalLoginSlice";
import { openModalRegisterOk } from "../../../../redux/modalRegisterOkSlice";
import { closeModalRegister, selectModalRegister } from "../../../../redux/modalRegisterSlice";
import { BodyUserRegister, IerrorMassage } from "../../../../types/types";
import BtnBrandActive from "../../Buttons/BtnBrandActive/BtnBrandActive";
import InputRegister from "../../Inputs/InputAuth/InputRegister";
import Loading from "../../Loading/Loading";
import style from "./ModalRegister.module.css";

const ModalRegister = () => {
    const dispatch = useDispatch();
    const isModalRegister = useSelector(selectModalRegister);
    const [userRegister, { isLoading, isSuccess }] = useUserRegisterMutation();

    const [errorMassage, setErrorMassage] = useState<IerrorMassage>({
        errorMassage: "",
        flagGlobal: false,
        flagPass: false,
        flagEmail:false,
    });

    const [isRegister, setIsRegister] = useState<BodyUserRegister>({
        email: "",
        name: "",
        surname: "",
        password: "",
        passwordRepeat: "",
    });

    const validateEmail = (email:string) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };

    const handleuserRegister = async () => {
        if (Object.values(isRegister).some((field) => !field.length)) {
            setErrorMassage((prev) => ({
                ...prev,
                errorMassage: "Все поля должны быть заполнены",
                flagGlobal: true,
            }));
        } else if (isRegister.password !== isRegister.passwordRepeat) {
            setErrorMassage((prev) => ({
                ...prev,
                errorMassage: "Пароли не совпадают",
                flagPass: true,
            }));

        } else if (isRegister.password.length < 5) {
            setErrorMassage((prev) => ({
                ...prev,
                errorMassage: "Пароль не может быть меньше 5 символов",
                flagPass: true,
            }));

        } else if (!validateEmail(isRegister.email)) {
            setErrorMassage((prev) => ({
                ...prev,
                errorMassage: "Некорректный email. Пожалуйста, введите email в формате email@gmail.com",
                flagEmail: true,
            }));

        } else {
            try {
                await userRegister(isRegister).unwrap();

            } catch (error) {
                console.log(error);
                setErrorMassage((prev) => ({
                    ...prev,
                    errorMassage: "Этот email уже занят,попробуйте другой",
                    flagEmail: true,
                }));

            }
        }
    };

    useEffect(() => {
        if (isSuccess) {
            dispatch(closeModalRegister());
            dispatch(openModalRegisterOk());
            setIsRegister({
                email: "",
                name: "",
                surname: "",
                password: "",
                passwordRepeat: "",
            });
            setErrorMassage((prev) => (
                {
                    ...prev,
                    flagGlobal: false,
                    flagEmail: false,
                    flagPass: false,
                    errorMassage: ""
                }));
        }
    }, [isSuccess, dispatch]);

    if (isLoading) {
        return <Loading />;
    }

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
                        {errorMassage.errorMassage && <span className={style.massage}>{errorMassage.errorMassage}</span>}

                        <InputRegister
                            auth={isRegister.email}
                            setAuth={setIsRegister}
                            isName="email"
                            img={dataAuth.imgEmail}
                            placeholder={dataAuth.placeholderEmail}
                            type="email"
                            errorMassage={errorMassage}
                            setErrorMassage={setErrorMassage}
                        />

                        <InputRegister
                            auth={isRegister.name}
                            setAuth={setIsRegister}
                            isName="name"
                            img={dataAuth.imgNameSurnume}
                            placeholder={dataAuth.placeholderName}
                            type="text"
                            errorMassage={errorMassage}
                            setErrorMassage={setErrorMassage}
                        />

                        <InputRegister
                            auth={isRegister.surname}
                            setAuth={setIsRegister}
                            isName="surname"
                            img={dataAuth.imgNameSurnume}
                            placeholder={dataAuth.placeholderSurnume}
                            type="text"
                            errorMassage={errorMassage}
                            setErrorMassage={setErrorMassage}
                        />

                        <InputRegister
                            auth={isRegister.password}
                            setAuth={setIsRegister}
                            isName="password"
                            img={dataAuth.imgPass}
                            placeholder={dataAuth.placeholderPass}
                            type="password"
                            errorMassage={errorMassage}
                            setErrorMassage={setErrorMassage}
                        />

                        <InputRegister
                            auth={isRegister.passwordRepeat}
                            setAuth={setIsRegister}
                            isName="passwordRepeat"
                            img={dataAuth.imgPass}
                            placeholder={dataAuth.placeholderPassRepeat}
                            type="password"
                            errorMassage={errorMassage}
                            setErrorMassage={setErrorMassage}
                        />
                    </div>
                    <BtnBrandActive
                        onClick={handleuserRegister}
                    >
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
                    onClick={() => dispatch(closeModalRegister())}
                    className={style.imges__close}
                    src="/imgs/delete.svg"
                    alt="Закрыть"
                />
            </div>
        </div>
    );
};

export default ModalRegister;
