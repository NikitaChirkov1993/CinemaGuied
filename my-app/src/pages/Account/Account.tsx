import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetFavoritesQuery, useUserLogoutMutation, useUserPofileQuery } from "../../api/cinemaGuideApi";
import FavoritesFilm from "../../components/FavoritesFilm/FavoritesFilm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BtnBrandActive from "../../components/ui/Buttons/BtnBrandActive/BtnBrandActive";
import BtnUseControl from "../../components/ui/Buttons/BtnUseControl/BtnUseControl";
import Loading from "../../components/ui/Loading/Loading";
import { firstLetter } from "../../utils/utls";
import style from "./Account.module.css";

const Account = () => {
    const [activeTab, setActiveTab] = useState<"favorites" | "settings">("favorites");
    const navigate = useNavigate();

    const { data:dataProfile } = useUserPofileQuery();

    const [userLogout, { isLoading: isLoadingLogout }] = useUserLogoutMutation();

    const handleLogout = async () => {
        try {
            await userLogout().unwrap();
            navigate("/");
            window.location.reload();
        } catch (error) {
            console.error("Ошибка при выходе из аккаунта:", error);
        }
    };

    if (isLoadingLogout) {
        return <Loading />;
    }

    const { firstName, firstSurname } = firstLetter(dataProfile?.name, dataProfile?.surname);

    //Избранные фильмы:
    const { data: datafavorites, isLoading:isLoadingfavorites, error:errorfavorites,refetch:refetchFavorites } = useGetFavoritesQuery();
    if (isLoadingfavorites) return <Loading />;


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
                        <>
                            {errorfavorites && <div>Error loading favorites</div>}

                            {(!datafavorites || datafavorites.length === 0) && <div>No favorites found</div>}

                            {datafavorites && datafavorites.length > 0 && (
                                <ul className={style.list__favorites}>
                                    {datafavorites.map((item) => (
                                        <FavoritesFilm
                                            key={item.id}
                                            imges={item.posterUrl}
                                            id={item.id}
                                            refetchFavorites={refetchFavorites}
                                        />
                                    ))}
                                </ul>
                            )}
                        </>
                    )}
                    {activeTab === "settings" && (
                        <ul className={style.list__settings}>
                            <li className={style.item__settings}>
                                <div className={style.avatar}>
                                    <p className={style.avatar__text}>
                                        {firstName}
                                        {firstSurname}
                                    </p>
                                </div>
                                <div className={style.info__name}>
                                    <p className={style.info__title}>Имя Фамилия</p>
                                    <p className={style.info__text}>
                                        {dataProfile?.name} {dataProfile?.surname}
                                    </p>
                                </div>
                            </li>

                            <li className={style.item__settings}>
                                <div className={style.avatar}>
                                    <img src="/imgs/mail.svg" alt="mail" />
                                </div>
                                <div className={style.info__name}>
                                    <p className={style.info__title}>Электронная почта</p>
                                    <p className={style.info__text}>{dataProfile?.email}</p>
                                </div>
                            </li>
                            <div className={style.btn__wrapper}>
                                <BtnBrandActive onClick={handleLogout}>Выйти из аккаунта</BtnBrandActive>
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
