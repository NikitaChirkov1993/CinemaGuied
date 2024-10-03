import { NavLink } from "react-router-dom";
import { useMovieTop10Query } from "../../api/cinemaGuideApi";
import AboutFilmPosterRandom from "../../components/AboutFilmPoster/AboutFilmPosterRandom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Loading from "../../components/ui/Loading/Loading";
import style from "./Home.module.css";

const Home = () => {
    const { data, isFetching, error } = useMovieTop10Query();
    console.log(data);
    if (isFetching) {
        return <Loading />; // Можно отобразить индикатор загрузки
    }
    if (error) {
        return <div>Error: {error.message}</div>; // Обработка ошибок
    }

    if (!data) {
        return <div>No data available</div>; // Если данные все еще недоступны
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
                                <li className={style.item}>
                                    <NavLink to={`/aboutFilm/${item.id}`}>
                                        {item.posterUrl ? (
                                            <img className={style.item__img} src={item.posterUrl} alt="film" />
                                        ) : (
                                            <img className={style.item__img} src="./../../../public/imgs/no3.webp" alt="filmNO" />
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
