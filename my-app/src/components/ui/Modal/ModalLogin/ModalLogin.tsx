import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { dataAuth } from "../../../../data/dataAuth";
import { closeModalLogin, selectModalLogin } from "../../../../redux/modalLoginSlice";
import { openModalRegister } from "../../../../redux/modalRegisterSlice";
import BtnBrandActive from "../../Buttons/BtnBrandActive/BtnBrandActive";
import InputAuth from "../../Inputs/InputAuth/InputAuth";
import style from "./ModalLogin.module.css";

const ModalLogin = () => {
    const isModalLogin = useSelector(selectModalLogin);
    const dispatch = useDispatch();

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
                        <InputAuth img={dataAuth[0].img} placeholder={dataAuth[0].placeholder} />
                        <InputAuth img={dataAuth[2].img} placeholder={dataAuth[2].placeholder1} />
                    </div>
                    <NavLink  className={style.auth__link} to={"/account"}>
                        <BtnBrandActive onClick={()=> dispatch(closeModalLogin())}>Войти</BtnBrandActive>
                    </NavLink>
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
                        src={dataAuth[0].imgClose} alt="Закрыть"
                    />
                </div>
            </div>
        </div>
    );
};

export default ModalLogin;
