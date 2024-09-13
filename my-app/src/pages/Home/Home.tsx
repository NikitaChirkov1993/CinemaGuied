import AboutFilmTitle from "../../components/AboutFilmTitle/AboutFilmTitle";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Top10FilmItem from "../../components/Top10FilmItem/Top10FilmItem";
import { dataTop10 } from "../../data/dataTop10";
import style from "./Home.module.css";

const Home = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className={style.main}>
                <div className="container">
                    <AboutFilmTitle flag={true} />
                    <h3 className={style.title}>Топ 10 фильмов</h3>
                    <ul className={style.list}>
                        {dataTop10.map((item) => {
                            return <Top10FilmItem imges={item.imges} />;
                        })}
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
