import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BtnUseControl from "../../components/ui/Buttons/BtnUseControl/BtnUseControl";
import style from "./Account.module.css";

const Account = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className={style.main}>
                <div className="container">
                    <h2 className={style.title}>Мой аккаунт</h2>
                    <div className={style.userControl}>
                        <BtnUseControl>
                            <img src="/imgs/on=false.svg" alt="" />
                            <p className={style.desktop}>
                                Избранные фильмы
                            </p>
                            <p className={style.mobile}>
                                Избранное
                            </p>
                        </BtnUseControl>
                        <BtnUseControl>
                            <img src="/imgs/user.svg" alt="" />
                            <p className={style.desktop}>
                                Настройки аккаунта
                            </p>
                            <p className={style.mobile}>
                                Настройки
                            </p>
                        </BtnUseControl>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Account;
