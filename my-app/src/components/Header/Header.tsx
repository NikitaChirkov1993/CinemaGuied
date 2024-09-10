import BtnMenu from "../ui/Buttons/BtnMenu/BtnMenu";
import InputMenu from "../ui/Inputs/InputMenu/inputMenu";
import style from "./Header.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.header__wrapper}>
                    <div className={style.logo}>
                        <img className={style.logo__img} src="/imgs/logo.svg" alt="логотип" />
                    </div>
                    <nav className={style.menu}>
                        <BtnMenu>Главная</BtnMenu>
                        <BtnMenu>Жанры</BtnMenu>
                        <InputMenu/>
                    </nav>

                    <BtnMenu>Войти</BtnMenu>
                </div>
            </div>
        </header>
    );
};

export default Header;
