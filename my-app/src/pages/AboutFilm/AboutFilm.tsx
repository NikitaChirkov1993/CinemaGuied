import AboutFilmItem from "../../components/AboutFilmItem/AboutFilmItem";
import AboutFilmTitle from "../../components/AboutFilmTitle/AboutFilmTitle";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { dataAboutFilm } from "../../data/dataAboutFilm";
import style from "./AboutFilm.module.css";

const AboutFilm = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className={style.main}>
                <div className="container">
                    <AboutFilmTitle flag={false} />
                    <h3 className={style.title}>О фильме</h3>
                    <ul className={style.list}>
                        {dataAboutFilm.map((item) => {
                            return (
                                <AboutFilmItem
                                    key={new Date().toISOString()}
                                    title={item.title}
                                    value={item.value}
                                />
                            );
                        })}
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AboutFilm;
