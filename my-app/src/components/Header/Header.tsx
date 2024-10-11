import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserPofileQuery } from "../../api/cinemaGuideApi";
import { selectisSearchVisible, toggleIsSearchVisible } from "../../redux/isSearchVisible";
import { openModalLogin } from "../../redux/modalLoginSlice";
import BtnMenu from "../ui/Buttons/BtnMenu/BtnMenu";
import InputMenu from "../ui/Inputs/InputMenu/InputMenu";
import ModalLogin from "../ui/Modal/ModalLogin/ModalLogin";
import ModalRegister from "../ui/Modal/ModalRegister/ModalRegister";
import ModalRegitserOK from "../ui/Modal/ModalRegitserOK/ModalRegitserOK";
import style from "./Header.module.css";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isSearchVisible = useSelector(selectisSearchVisible);

    const { data:dataProfile} = useUserPofileQuery();

    const rootMobileInfo = [style.menu__mobile_info];
    if (isSearchVisible) {
        rootMobileInfo.push(style.center);
    }

    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.header__wrapper}>
                    <nav className={style.menu__desktop}>
                        <NavLink className={style.link} to={"/"}>
                            <div className={style.logo}>
                                <img className={style.logo__img} src="/imgs/logo.svg" alt="логотип" />
                            </div>
                        </NavLink>
                        <NavLink className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : style.link)} to={"/"}>
                            <BtnMenu>Главная</BtnMenu>
                        </NavLink>
                        <NavLink className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : style.link)} to={"/genere"}>
                            <BtnMenu>Жанры</BtnMenu>
                        </NavLink>
                        <InputMenu /> {/* Условный рендеринг для InputMenu */}
                        {!dataProfile ? (
                            <BtnMenu onClick={() => dispatch(openModalLogin())}>Войти</BtnMenu>
                        ) : (
                            <NavLink className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : style.link)} to={"/account"}>
                                <BtnMenu>{dataProfile?.name}</BtnMenu>
                            </NavLink>
                        )}
                        <ModalLogin />
                        <ModalRegister />
                        <ModalRegitserOK />
                    </nav>
                    <nav className={style.menu__mobile}>
                        <div>
                            {!isSearchVisible && (
                                <NavLink className={style.link} to={"/"}>
                                    <div className={style.logo}>
                                        <img className={style.logo__img} src="/imgs/logo.svg" alt="логотип" />
                                    </div>
                                </NavLink>
                            )}
                        </div>
                        <div className={rootMobileInfo.join(" ")}>
                            {!isSearchVisible && (
                                <NavLink className={style.link} to={"/genere"}>
                                    <div className={style.icon}>
                                        <img src="/imgs/genres.svg" alt="Жанры" />
                                    </div>
                                </NavLink>
                            )}

                            {!isSearchVisible && (
                                <div onClick={() => dispatch(toggleIsSearchVisible())} className={style.icon}>
                                    <img src="/imgs/searchmenu.svg" alt="Поиск" />
                                </div>
                            )}

                            {isSearchVisible && <InputMenu />}

                            <ModalLogin />

                            <ModalRegister />

                            <ModalRegitserOK />
                            {!isSearchVisible && (
                                <>
                                    {!dataProfile ? (
                                        <div
                                            onClick={() => {
                                                dispatch(openModalLogin());
                                            }}
                                            className={style.icon}>
                                            <img src="/imgs/key.svg" alt="Войти" />
                                        </div>
                                    ) : (
                                        <div
                                            onClick={() => {
                                                navigate("/account");
                                            }}
                                            className={style.icon}>
                                            <img src="/imgs/user.svg" alt="Аккаунт" />
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
