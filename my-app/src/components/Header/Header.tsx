import { useState } from "react";
import { NavLink } from "react-router-dom";
import BtnMenu from "../ui/Buttons/BtnMenu/BtnMenu";
import InputMenu from "../ui/Inputs/InputMenu/InputMenu";
import ModalAuth from "../ui/Modal/ModalAuth/ModalAuth";
import style from "./Header.module.css";

const Header = () => {
    const [visibleModal, setVisibleModal] = useState(false);
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
                        <BtnMenu onClick={() => setVisibleModal(true)}>Войти</BtnMenu>
                        <ModalAuth visible={visibleModal} setVisible={setVisibleModal}>
                            asd
                        </ModalAuth>
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
                        <ModalAuth visible={visibleModal} setVisible={setVisibleModal}>
                            asd
                        </ModalAuth>
                        <div onClick={() => {
                            setVisibleModal(true);
                            console.log("sdljkfklsdklfdjskl");

                        }} className={style.icon}>
                            <img src="/imgs/user.svg" alt="Войти" />
                        </div>

                        {/* <div onClick={()=> setVisibleModal(true)}  className={style.icon}>
                            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.917 13C12.441 15.8377 9.973 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C9.973 6 12.441 8.16229 12.917 11H23V13H21V17H19V13H17V17H15V13H12.917ZM7 16C9.20914 16 11 14.2091 11 12C11 9.79086 9.20914 8 7 8C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16Z"
                                    fill="white"
                                />
                            </svg>
                        </div> */}

                        {/* <InputMenu  /> */}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
