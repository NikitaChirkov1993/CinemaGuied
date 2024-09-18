import { useState } from "react";
import { NavLink } from "react-router-dom";
import BtnMenu from "../ui/Buttons/BtnMenu/BtnMenu";
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
                            <button onClick={() => {
                                setModalRegister(true);
                                setModalLogin(false);
                            } }>Войти</button>
                        </ModalLogin>

                        <ModalRegister modalRegister={modalRegister} setModalRegister={setModalRegister}>
                            <button onClick={() => {
                                setModalRegister(false);
                                setModalRegisterOK(true);
                            }}>Регистраия</button>
                        </ModalRegister>

                        <ModalRegitserOK modalRegisterOK={modalRegisterOK} setModalRegisterOK={setModalRegisterOK} >
                            <button onClick={() => {
                                setModalRegisterOK(false);
                                setModalLogin(true);
                            }}>ОК</button>
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
                            <button onClick={() => {
                                setModalRegister(true);
                                setModalLogin(false);
                            } }>Войти</button>
                        </ModalLogin>

                        <ModalRegister modalRegister={modalRegister} setModalRegister={setModalRegister}>
                            <button onClick={() => {
                                setModalRegister(false);
                                setModalRegisterOK(true);
                            }}>Регистраия</button>
                        </ModalRegister>

                        <ModalRegitserOK modalRegisterOK={modalRegisterOK} setModalRegisterOK={setModalRegisterOK} >
                            <button onClick={() => {
                                setModalRegisterOK(false);
                                setModalLogin(true);
                            }}>ОК</button>
                        </ModalRegitserOK>
                        <div onClick={() => {
                            setModalLogin(true);
                            console.log("sdljkfklsdklfdjskl");

                        }} className={style.icon}>
                            <img src="/imgs/user.svg" alt="Войти" />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
