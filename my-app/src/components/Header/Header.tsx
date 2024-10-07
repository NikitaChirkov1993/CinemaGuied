import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserPofileQuery } from "../../api/cinemaGuideApi";
import { selectisAuth } from "../../redux/isAuthenticatedSlice";
import { openModalLogin } from "../../redux/modalLoginSlice";
import BtnMenu from "../ui/Buttons/BtnMenu/BtnMenu";
import InputMenu from "../ui/Inputs/InputMenu/InputMenu";
import ModalLogin from "../ui/Modal/ModalLogin/ModalLogin";
import ModalRegister from "../ui/Modal/ModalRegister/ModalRegister";
import ModalRegitserOK from "../ui/Modal/ModalRegitserOK/ModalRegitserOK";
import style from "./Header.module.css";

const Header = () => {
    const dispatch = useDispatch();
    const { data, isLoading, isError, refetch,isSuccess } = useUserPofileQuery();
    // const selectorIsAuth = useSelector(selectisAuth);
    const navigate = useNavigate();

    if (isSuccess) {
        console.log(data,"dataPROFILE");
    }

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

                        { !data   ?
                            <BtnMenu onClick={() => dispatch(openModalLogin())}>Войти</BtnMenu>
                            :
                            <NavLink className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : style.link)} to={"/account"}>
                                <BtnMenu>{ data?.name}</BtnMenu>
                            </NavLink>
                        }

                        <ModalLogin/>

                        <ModalRegister/>

                        <ModalRegitserOK/>

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

                         <ModalLogin />

                        <ModalRegister/>

                        <ModalRegitserOK />
                        {!data ?

                            <div
                            onClick={() => {
                                dispatch(openModalLogin());
                            }}
                            className={style.icon}>
                            <img src="/imgs/key.svg" alt="Войти" />
                            </div>
                            :
                            <div
                            onClick={() => {
                                navigate("/account")
                            }}
                            className={style.icon}>
                            <img src="/imgs/user.svg" alt="Аккаунт" />
                            </div>
                        }

                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
