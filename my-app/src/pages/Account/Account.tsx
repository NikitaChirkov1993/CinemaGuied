import { useState } from "react";
import FavoritesItem from "../../components/FavoritesItem/FavoritesItem";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BtnUseControl from "../../components/ui/Buttons/BtnUseControl/BtnUseControl";
import { dataTop10 } from "../../data/dataTop10";
import style from "./Account.module.css";

const Account = () => {
    const [activeTab, setActiveTab] = useState<'favorites' | 'settings'>('favorites');

    return (
        <div className="wrapper">
            <Header />
            <main className={style.main}>
                <div className="container">
                    <h2 className={style.title}>Мой аккаунт</h2>
                    <div className={style.userControl}>
                        <div
                            className={`${style.link} ${activeTab === 'favorites' ? style.active : ''}`}
                            onClick={() => setActiveTab('favorites')}
                        >
                            <BtnUseControl>
                                <img src="/imgs/on=false.svg" alt="" />
                                <p className={style.desktop}>Избранные фильмы</p>
                                <p className={style.mobile}>Избранное</p>
                            </BtnUseControl>
                        </div>

                        <div
                            className={`${style.link} ${activeTab === 'settings' ? style.active : ''}`}
                            onClick={() => setActiveTab('settings')}
                        >
                            <BtnUseControl>
                                <img src="/imgs/user.svg" alt="" />
                                <p className={style.desktop}>Настройки аккаунта</p>
                                <p className={style.mobile}>Настройки</p>
                            </BtnUseControl>
                        </div>
                    </div>
                    {activeTab === 'favorites' &&
                        <ul className={style.list}>
                            {dataTop10.map((item) => {
                                return (
                                    <FavoritesItem imges={ item.imges} />
                                );
                            })}
                        </ul>
                    }
                    {activeTab === 'settings' && <div>Второй</div> }

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Account;
