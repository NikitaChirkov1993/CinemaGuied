import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUserLogoutMutation, useUserPofileQuery } from "../../api/cinemaGuideApi";
import FavoritesItem from "../../components/FavoritesItem/FavoritesItem";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BtnBrandActive from "../../components/ui/Buttons/BtnBrandActive/BtnBrandActive";
import BtnUseControl from "../../components/ui/Buttons/BtnUseControl/BtnUseControl";
import Loading from "../../components/ui/Loading/Loading";
import { dataTop10 } from "../../data/dataTop10";
import style from "./Account.module.css";

const Account = () => {
    const [activeTab, setActiveTab] = useState<"favorites" | "settings">("favorites");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {data,isLoading,isError,isFetching,refetch } = useUserPofileQuery();
    // const {isSuccess } = useUserLogoutQuery();

    const [userLogout, { isSuccess,isLoading:LoadingLogout }] = useUserLogoutMutation();

    // if (isSuccess) {
    //     navigate("/")
    // }

    const handleLogout = async () => {
        try {
            await userLogout().unwrap(); // Выполняем запрос

        } catch (error) {
            console.error("Ошибка при выходе из аккаунта:", error);
        }
    };

    if (LoadingLogout) {
        return (
            <Loading />
        )
    }

        if (isSuccess) {
            // dispatch(cinemaGuideApi.util.invalidateTags(['User']));
            // dispatch(isAuthtrue());
            navigate("/");
            window.location.reload();

        }



    return (
        <div className="wrapper">
            <Header />
            <main className={style.main}>
                <div className="container">
                    <h2 className={style.title}>Мой аккаунт</h2>
                    <div className={style.userControl}>
                        <div className={`${style.link} ${activeTab === "favorites" ? style.active : ""}`} onClick={() => setActiveTab("favorites")}>
                            <BtnUseControl>
                                <img src="/imgs/on=false.svg" alt="" />
                                <p className={style.desktop}>Избранные фильмы</p>
                                <p className={style.mobile}>Избранное</p>
                            </BtnUseControl>
                        </div>

                        <div className={`${style.link} ${activeTab === "settings" ? style.active : ""}`} onClick={() => setActiveTab("settings")}>
                            <BtnUseControl>
                                <img src="/imgs/user.svg" alt="" />
                                <p className={style.desktop}>Настройки аккаунта</p>
                                <p className={style.mobile}>Настройки</p>
                            </BtnUseControl>
                        </div>
                    </div>
                    {activeTab === "favorites" && (
                        <ul className={style.list__favorites}>
                            {dataTop10.map((item) => {
                                return <FavoritesItem imges={item.imges} />;
                            })}
                        </ul>
                    )}
                    {activeTab === "settings" && (
                        <ul className={style.list__settings}>
                            <li className={style.item__settings}>
                                <div className={style.avatar}>
                                    <p className={style.avatar__text}>НЧ</p>
                                </div>
                                <div className={style.info__name}>
                                    <p className={style.info__title}>Имя Фамилия</p>
                                    <p className={style.info__text}>{data?.name} { data?.surname}</p>
                                </div>
                            </li>

                            <li className={style.item__settings}>
                                <div className={style.avatar}>
                                    <img src="/imgs/mail.svg" alt="mail" />
                                </div>
                                <div className={style.info__name}>
                                    <p className={style.info__title}>Электронная почта</p>
                                    <p className={style.info__text}>{ data?.email}</p>
                                </div>
                            </li>
                            <div className={style.btn__wrapper}>
                                    <BtnBrandActive onClick={handleLogout} >Выйти из аккаунта</BtnBrandActive>
                                {/* <NavLink to={"/"}>
                                </NavLink> */}
                            </div>
                        </ul>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Account;
