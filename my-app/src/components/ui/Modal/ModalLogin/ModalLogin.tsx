import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUserLoginMutation } from "../../../../api/cinemaGuideApi";
import { dataAuth } from "../../../../data/dataAuth";
import { isAuthfalse } from "../../../../redux/isAuthenticatedSlice";
import { closeModalLogin, selectModalLogin } from "../../../../redux/modalLoginSlice";
import { openModalRegister } from "../../../../redux/modalRegisterSlice";
import { BodyUserLogin, IerrorMassageLogin } from "../../../../types/types";
import BtnBrandActive from "../../Buttons/BtnBrandActive/BtnBrandActive";
import InputLogin from "../../Inputs/InputAuth/InputLogin";
import Loading from "../../Loading/Loading";
import style from "./ModalLogin.module.css";

const ModalLogin = () => {
    const isModalLogin = useSelector(selectModalLogin);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userLogin, { data, isLoading, isSuccess }] = useUserLoginMutation();



    const [isLogin, setIsLogin] = useState<BodyUserLogin>({
        email: "",
        password: "",
    });


    const [errorMassage, setErrorMassage] = useState<IerrorMassageLogin>({
        errorMassage: "",
        flagGlobal: false,
        flagGlobal2: false,

    });

    const handleuserLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        if (Object.values(isLogin).some((field) => !field.length)) {
            setErrorMassage((prev) => ({
                ...prev,
                errorMassage: "Все поля должны быть заполнены",
                flagGlobal: true,
            }));

        } else {
            // dispatch(closeModalLogin());
            // navigate("/account");
            try {
                await userLogin(isLogin).unwrap();
            } catch (error) {
                console.log(error);
                setErrorMassage((prev) => ({
                    ...prev,
                    errorMassage: "Неверный email или пароль",
                    flagGlobal2: true,
                }));

            }
        }
    };

    useEffect(() => {
        if (isSuccess) {
            dispatch(closeModalLogin());
            // dispatch(isAuthfalse());
            navigate("/account");
            setIsLogin({
                email: "",
                password: "",
            });
            setErrorMassage((prev) => (
                {
                    ...prev,
                    errorMassage: "",
                    flagGlobal: false,
                }));
        }
    }, [isSuccess, dispatch]);

    if (isLoading) {
        return <Loading />;
    }


    const rootClasses = [style.myModal];
    if (isModalLogin) {
        rootClasses.push(style.active);
    }
    return (
        <div className={rootClasses.join(" ")} onClick={() => dispatch(closeModalLogin())}>
            <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
                <div className={style.auth__wrapper}>
                    <img className={style.auth__logo} src="/imgs/logo.svg" alt="Логотип" />
                    <form onSubmit={handleuserLogin} className={style.authInput__wrapper}>
                        {errorMassage.errorMassage && <span className={style.massage}>{errorMassage.errorMassage}</span>}

                        <InputLogin
                            img={dataAuth.imgEmail}
                            placeholder={dataAuth.placeholderEmail}
                            type="text"
                            isName="email"
                            isLogin={isLogin.email}
                            setIsLogin={setIsLogin}
                            errorMassage={errorMassage}
                            setErrorMassage={setErrorMassage}
                        />

                        <InputLogin
                            img={dataAuth.imgPass}
                            placeholder={dataAuth.placeholderPass}
                            type="password"
                            isName="password"
                            isLogin={isLogin.password}
                            setIsLogin={setIsLogin}
                            errorMassage={errorMassage}
                            setErrorMassage={setErrorMassage}
                        />
                        type
                    </form>
                        <BtnBrandActive onClick={handleuserLogin}>Войти</BtnBrandActive>
                    <div
                        onClick={() => {
                            dispatch(closeModalLogin());
                            dispatch(openModalRegister());
                        }}
                        className={style.auth__text}>
                        Регистраия
                    </div>
                    <img
                        onClick={() => {
                            dispatch(closeModalLogin());
                        }}
                        className={style.imges__close}
                        src="/imgs/delete.svg" alt="Закрыть"
                    />
                </div>
            </div>
        </div>
    );
};

export default ModalLogin;
