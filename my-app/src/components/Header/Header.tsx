import { NavLink } from "react-router-dom";
import BtnMenu from "../ui/Buttons/BtnMenu/BtnMenu";
import InputMenu from "../ui/Inputs/InputMenu/InputMenu";
import style from "./Header.module.css";

const Header = () => {
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
                        <NavLink
                            className={({ isActive}) => isActive ? `${style.link} ${style.active}` : style.link}
                            to={"/"}>
                            <BtnMenu>Главная</BtnMenu>
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => isActive ? `${style.link} ${style.active}` : style.link}
                            to={"/genere"}>
                            <BtnMenu>Жанры</BtnMenu>
                        </NavLink>

                        <InputMenu />
                        <BtnMenu>Войти</BtnMenu>
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
                        <div className={style.icon}>
                            <img src="/imgs/user.svg" alt="" />
                        </div>
                        {/* <InputMenu  /> */}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
