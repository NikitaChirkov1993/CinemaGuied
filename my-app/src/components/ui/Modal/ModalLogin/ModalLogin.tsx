import { NavLink } from "react-router-dom";
import { dataAuth } from "../../../../data/dataAuth";
import BtnBrandActive from "../../Buttons/BtnBrandActive/BtnBrandActive";
import InputAuth from "../../Inputs/InputAuth/InputAuth";
import style from "./ModalLogin.module.css";

const ModalLogin = ({ setModalRegister, modalLogin, setModalLogin }) => {
    const rootClasses = [style.myModal];
    if (modalLogin) {
        rootClasses.push(style.active);
    }
    return (
        <div className={rootClasses.join(" ")} onClick={() => setModalLogin(false)}>
            <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
                <div className={style.auth__wrapper}>
                    <img className={style.auth__logo} src="/imgs/logo.svg" alt="Логотип" />
                    <div className={style.authInput__wrapper}>
                        <InputAuth img={dataAuth[0].img} placeholder={dataAuth[0].placeholder} />
                        <InputAuth img={dataAuth[2].img} placeholder={dataAuth[2].placeholder1} />
                    </div>
                    <NavLink className={style.auth__link} to={"/account"}>
                        <BtnBrandActive>Войти</BtnBrandActive>
                    </NavLink>
                    <div
                        onClick={() => {
                            setModalLogin(false);
                            setModalRegister(true);
                        }}
                        className={style.auth__text}>
                        Регистраия
                    </div>
                    <img
                        onClick={() => {
                            setModalLogin(false);
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
