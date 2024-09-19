import { useState } from "react";
import { NavLink } from "react-router-dom";
import { dataAuth } from "../../data/dataAuth";
import BtnBrandActive from "../ui/Buttons/BtnBrandActive/BtnBrandActive";
import BtnMenu from "../ui/Buttons/BtnMenu/BtnMenu";
import InputAuth from "../ui/Inputs/InputAuth/InputAuth";
import InputMenu from "../ui/Inputs/InputMenu/InputMenu";
import ModalLogin from "../ui/Modal/ModalLogin/ModalLogin";
import ModalRegister from "../ui/Modal/ModalRegister/ModalRegister";
import ModalRegitserOK from "../ui/Modal/ModalRegitserOK/ModalRegitserOK";
import style from "./Header.module.css";

const Header = () => {
    const [modalLogin, setModalLogin] = useState(false);
    const [modalRegister, setModalRegister] = useState(false);
    const [modalRegisterOK, setModalRegisterOK] = useState(false);
    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.header__wrapper}>
                    <NavLink className={style.link} to={"/"}>
                        <div className={style.logo}>
                            <img className={style.logo__img} src="/imgs/logo.svg" alt="логотип" />
                        </div>
                    </NavLink>

                    <nav className={style.menu__desktop}>
                        <NavLink className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : style.link)} to={"/"}>
                            <BtnMenu>Главная</BtnMenu>
                        </NavLink>

                        <NavLink className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : style.link)} to={"/genere"}>
                            <BtnMenu>Жанры</BtnMenu>
                        </NavLink>

                        <InputMenu />
                        {/* <NavLink className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : style.link)} to={"/account"}>
                            <BtnMenu>Никита</BtnMenu>
                        </NavLink> */}
                        <BtnMenu onClick={() => setModalLogin(true)}>Войти</BtnMenu>

                        <ModalLogin modalLogin={modalLogin} setModalLogin={setModalLogin}>
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
                                        setModalRegister(true);
                                        setModalLogin(false);
                                    }}
                                    className={style.auth__text}>
                                    Регистраия
                                </div>
                            </div>
                        </ModalLogin>

                        <ModalRegister modalRegister={modalRegister} setModalRegister={setModalRegister}>
                            <div className={style.auth__wrapper}>
                                <img className={style.auth__logo} src="/imgs/logo.svg" alt="Логотип" />
                                <h3 className={style.regitser__title}>Регистрация</h3>
                                <div className={style.authInput__wrapper}>
                                    <InputAuth img={dataAuth[0].img} placeholder={dataAuth[0].placeholder} />
                                    <InputAuth img={dataAuth[1].img} placeholder={dataAuth[1].placeholder1} />
                                    <InputAuth img={dataAuth[1].img} placeholder={dataAuth[1].placeholder2} />
                                    <InputAuth img={dataAuth[2].img} placeholder={dataAuth[2].placeholder1} />
                                    <InputAuth img={dataAuth[2].img} placeholder={dataAuth[2].placeholder2} />
                                </div>
                                <BtnBrandActive
                                    onClick={() => {
                                        setModalRegister(false);
                                        setModalRegisterOK(true);
                                    }}>
                                    Создать аккаунт
                                </BtnBrandActive>
                                <div
                                    onClick={() => {
                                        setModalRegister(false);
                                        setModalLogin(true);
                                    }}
                                    className={style.auth__text}>
                                    У меня есть пароль
                                </div>
                            </div>
                        </ModalRegister>

                        <ModalRegitserOK modalRegisterOK={modalRegisterOK} setModalRegisterOK={setModalRegisterOK}>
                            <div className={style.auth__wrapper}>
                                <img className={style.auth__logo} src="/imgs/logo.svg" alt="Логотип" />
                                <h3 className={style.regitser__title}>Регистрация завершина</h3>
                                <p className={style.registerOK__text}>Используйте вашу электронную почту для входа</p>
                                <BtnBrandActive
                                    onClick={() => {
                                        setModalRegisterOK(false);
                                        setModalLogin(true);
                                    }}>
                                    Войти
                                </BtnBrandActive>
                            </div>
                        </ModalRegitserOK>
                    </nav>
                    <nav className={style.menu__mobile}>
                        <NavLink className={style.link} to={"/genere"}>
                            <div className={style.icon}>
                                <img src="/imgs/genres.svg" alt="Жанры" />
                            </div>
                        </NavLink>

                        <div className={style.icon}>
                            <img src="/imgs/searchmenu.svg" alt="Поиск" />
                        </div>
                        {/* <NavLink className={style.link}  to={"/account"}>
                            <div className={style.icon}>
                                <img src="/imgs/user.svg" alt="Войти" />
                            </div>
                        </NavLink> */}
                        <ModalLogin modalLogin={modalLogin} setModalLogin={setModalLogin}>
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
                                        setModalRegister(true);
                                        setModalLogin(false);
                                    }}
                                    className={style.auth__text}>
                                    Регистраия
                                </div>
                            </div>
                        </ModalLogin>

                        <ModalRegister modalRegister={modalRegister} setModalRegister={setModalRegister}>
                            <div className={style.auth__wrapper}>
                                <img className={style.auth__logo} src="/imgs/logo.svg" alt="Логотип" />
                                <h3 className={style.regitser__title}>Регистрация</h3>
                                <div className={style.authInput__wrapper}>
                                    <InputAuth img={dataAuth[0].img} placeholder={dataAuth[0].placeholder} />
                                    <InputAuth img={dataAuth[1].img} placeholder={dataAuth[1].placeholder1} />
                                    <InputAuth img={dataAuth[1].img} placeholder={dataAuth[1].placeholder2} />
                                    <InputAuth img={dataAuth[2].img} placeholder={dataAuth[2].placeholder1} />
                                    <InputAuth img={dataAuth[2].img} placeholder={dataAuth[2].placeholder2} />
                                </div>
                                <BtnBrandActive
                                    onClick={() => {
                                        setModalRegister(false);
                                        setModalRegisterOK(true);
                                    }}>
                                    Создать аккаунт
                                </BtnBrandActive>
                                <div
                                    onClick={() => {
                                        setModalRegister(false);
                                        setModalLogin(true);
                                    }}
                                    className={style.auth__text}>
                                    У меня есть пароль
                                </div>
                            </div>
                        </ModalRegister>

                        <ModalRegitserOK modalRegisterOK={modalRegisterOK} setModalRegisterOK={setModalRegisterOK}>
                            <div className={style.auth__wrapper}>
                                <img className={style.auth__logo} src="/imgs/logo.svg" alt="Логотип" />
                                <h3 className={style.regitser__title}>Регистрация завершина</h3>
                                <p className={style.registerOK__text}>Используйте вашу электронную почту для входа</p>
                                <BtnBrandActive
                                    onClick={() => {
                                        setModalRegisterOK(false);
                                        setModalLogin(true);
                                    }}>
                                    Войти
                                </BtnBrandActive>
                            </div>
                        </ModalRegitserOK>
                        <div
                            onClick={() => {
                                setModalLogin(true);
                                console.log("sdljkfklsdklfdjskl");
                            }}
                            className={style.icon}>
                            <img src="/imgs/user.svg" alt="Войти" />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
