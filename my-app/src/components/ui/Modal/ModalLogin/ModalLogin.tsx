import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dataAuth } from "../../../../data/dataAuth";
import { closeModalLogin, selectModalLogin } from "../../../../redux/modalLoginSlice";
import { openModalRegister } from "../../../../redux/modalRegisterSlice";
import { BodyUserLogin, IerrorMassageLogin } from "../../../../types/types";
import BtnBrandActive from "../../Buttons/BtnBrandActive/BtnBrandActive";
import InputLogin from "../../Inputs/InputAuth/InputLogin";
import style from "./ModalLogin.module.css";

const ModalLogin = () => {
    const isModalLogin = useSelector(selectModalLogin);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [isLogin, setIsLogin] = useState<BodyUserLogin>({
        email: "",
        password: "",
    });

    console.log(isLogin);

    const [errorMassage, setErrorMassage] = useState<IerrorMassageLogin>({
        errorMassage: "",
        flagGlobal: false,
    });


    const handleuserLogin = async () => {
        if (Object.values(isLogin).some((field) => !field.length)) {
            setErrorMassage((prev) => ({
                ...prev,
                errorMassage: "Все поля должны быть заполнены",
                flagGlobal: true,
            }));

        } else {
            dispatch(closeModalLogin());
            navigate("/account");
            // try {
            // } catch (error) {
            //     // console.log(error);
            //     // setErrorMassage((prev) => ({
            //     //     ...prev,
            //     //     errorMassage: "Неверный email или пароль",
            //     //     flagGlobal: true,
            //     // }));

            // }
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
    //         setErrorMassage((prev) => (
    //             {
    //                 ...prev,
    //                 flagGlobal: false,
    //                 flagEmail: false,
    //                 flagPass: false,
    //                 errorMassage: ""
    //             }));
    //     }
    // }, [isSuccess, dispatch]);


    const rootClasses = [style.myModal];
    if (isModalLogin) {
        rootClasses.push(style.active);
    }
    return (
        <div className={rootClasses.join(" ")} onClick={() => dispatch(closeModalLogin())}>
            <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
                <div className={style.auth__wrapper}>
                    <img className={style.auth__logo} src="/imgs/logo.svg" alt="Логотип" />
                    <div className={style.authInput__wrapper}>
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
                    </div>
                        <BtnBrandActive onClick={handleuserLogin}>Войти</BtnBrandActive>
                    {/* <NavLink  className={style.auth__link} to={"/account"}>
                    </NavLink> */}
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
