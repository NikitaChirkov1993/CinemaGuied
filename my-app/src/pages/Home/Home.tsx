import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useMovieTop10Query } from "../../api/cinemaGuideApi";
import AboutFilmPosterRandom from "../../components/AboutFilmPoster/AboutFilmPosterRandom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { renderContent } from "../../utils/renderContent";
import style from "./Home.module.css";

const Home = () => {

    useEffect(() => {
        const hasSeenAlert = localStorage.getItem("cookieAlertShown");

        if (!hasSeenAlert) {
          alert("Этот сайт использует cookies для улучшения вашего опыта.");
          localStorage.setItem("cookieAlertShown", "true");
        }
      }, []);

    const { data, isFetching, isError } = useMovieTop10Query();

    const content = renderContent(isFetching, isError);
    if (content) {
        return content;
    }

    if (!data) {
        return <div>Нет доступных данных!</div>;
    }

    return (
        <div className="wrapper">
            <Header />
            <main className={style.main}>
                <div className="container">
                    <AboutFilmPosterRandom />
                    <h3 className={style.title}>Топ 10 фильмов</h3>
                    <ul className={style.list}>
                        {data.map((item) => {
                            return (
                                <li key={item.id} className={style.item}>
                                    <NavLink to={`/aboutFilm/${item.id}`}>
                                        {item.posterUrl ? (
                                            <img className={style.item__img} src={item.posterUrl} alt="film" />
                                        ) : (
                                            <img className={style.item__img} src="/imgs/no3.webp" alt="filmNO" />
                                        )}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
