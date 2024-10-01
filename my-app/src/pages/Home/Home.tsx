import { useMovieTop10Query } from "../../api/cinemaGuideApi";
import AboutFilmTitle from "../../components/AboutFilmTitle/AboutFilmTitle";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Top10FilmItem from "../../components/Top10FilmItem/Top10FilmItem";
import Loading from "../../components/ui/Loading/Loading";
import style from "./Home.module.css";

const Home = () => {
    const { data, isFetching, error,} = useMovieTop10Query();
    console.log(data);
    if (isFetching) {
        return <Loading/>; // Можно отобразить индикатор загрузки
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
                    <AboutFilmTitle flag={true} />
                    <h3 className={style.title}>Топ 10 фильмов</h3>
                    <ul className={style.list}>
                        {data.map((item) => {
                            return <Top10FilmItem id={item.id} key={item.id} imges={item.posterUrl} />;
                        })}
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
