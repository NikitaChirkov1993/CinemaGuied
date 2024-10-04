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
import Loading from "../../Loading/Loading";
import style from "./ModalRegister.module.css";

const ModalRegister = () => {
    const dispatch = useDispatch();
    const isModalRegister = useSelector(selectModalRegister);
    const [userRegister, { isLoading, isSuccess }] = useUserRegisterMutation();

    const [errorMassage, setErrorMassage] = useState<{ errorMassage: string ,flagGlobal:boolean,flagPass:boolean,flagEmail:boolean }>({
        errorMassage: "",
        flagGlobal: false,
        flagPass: false,
        flagEmail:false,
    });

    const [flagError, setFlagError] = useState<boolean>(false);
    const [flagPass, setFlagPass] = useState<boolean>(false);
    const [flagEmail, setFlagEmail] = useState<boolean>(false);

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
            setErrorMassage({ errorMassage: "Все поля должны быть заполненны" });
            setFlagError(true);
        } else if (isRegister.password !== isRegister.passwordRepeat) {
            setErrorMassage({ errorMassage: "Пароли не совпадают" });
            setFlagPass(true);
        }else if (isRegister.password.length < 5) {
            setErrorMassage({ errorMassage: "Пароль не может быть меньше 5 символов" });
            setFlagPass(true);
        }else if ( !validateEmail(isRegister.email)) {
            setErrorMassage({ errorMassage: "Некорректный email. Пожалуйста, введите email в формате email@gmail.com." });
            setFlagEmail(true);
        } else {
            try {
                // await userRegister(isRegister).unwrap();
                dispatch(closeModalRegister());
                dispatch(openModalRegisterOk());
            } catch (error) {
                console.log(error);
                setErrorMassage({ errorMassage: "Такой пользователь уже существует" });
                setFlagError(true);
                setIsRegister({
                    email: "",
                    name: "",
                    surname: "",
                    password: "",
                    passwordRepeat: "",
                });

            }
        }
    };

    // useEffect(() => {
    //     if (isSuccess) {
    //         dispatch(closeModalRegister());
    //         dispatch(openModalRegisterOk());
    //         setIsRegister({
    //             email: "",
    //             name: "",
    //             surname: "",
    //             password: "",
    //             passwordRepeat: "",
    //         });
    //         setErrorMassage({ errorMassage: "" });
    //         setFlagError(false);
    //         setFlagPass(false);
    //     }
    // }, [isSuccess, dispatch]);

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

                        <InputAuth
                            auth={isRegister.email}
                            setAuth={setIsRegister}
                            isName="email"
                            img={dataAuth.imgEmail}
                            placeholder={dataAuth.placeholderEmail}
                            setErrorMassage={setErrorMassage}
                            flagError={flagError}
                            setFlagError={setFlagError}
                            type="email"
                            flagPass={flagPass}
                            setFlagPass={setFlagPass}
                        />

                        <InputAuth
                            auth={isRegister.name}
                            setAuth={setIsRegister}
                            isName="name"
                            img={dataAuth.imgNameSurnume}
                            placeholder={dataAuth.placeholderName}
                            setErrorMassage={setErrorMassage}
                            flagError={flagError}
                            setFlagError={setFlagError}
                            type="text"
                            flagPass={flagPass}
                            setFlagPass={setFlagPass}
                        />

                        <InputAuth
                            auth={isRegister.surname}
                            setAuth={setIsRegister}
                            isName="surname"
                            img={dataAuth.imgNameSurnume}
                            placeholder={dataAuth.placeholderSurnume}
                            setErrorMassage={setErrorMassage}
                            flagError={flagError}
                            setFlagError={setFlagError}
                            type="text"
                            flagPass={flagPass}
                            setFlagPass={setFlagPass}
                        />

                        <InputAuth
                            auth={isRegister.password}
                            setAuth={setIsRegister}
                            isName="password"
                            img={dataAuth.imgPass}
                            placeholder={dataAuth.placeholderPass}
                            setErrorMassage={setErrorMassage}
                            flagError={flagError}
                            setFlagError={setFlagError}
                            type="password"
                            flagPass={flagPass}
                            setFlagPass={setFlagPass}
                        />

                        <InputAuth
                            auth={isRegister.passwordRepeat}
                            setAuth={setIsRegister}
                            isName="passwordRepeat"
                            img={dataAuth.imgPass}
                            placeholder={dataAuth.placeholderPassRepeat}
                            setErrorMassage={setErrorMassage}
                            flagError={flagError}
                            setFlagError={setFlagError}
                            type="password"
                            flagPass={flagPass}
                            setFlagPass={setFlagPass}
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
