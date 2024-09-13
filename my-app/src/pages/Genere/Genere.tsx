import Footer from "../../components/Footer/Footer";
import GenereItem from "../../components/GenereItem/GenereItem";
import Header from "../../components/Header/Header";
import { dataGenereFilm } from "../../data/dataGenereFilm";
import style from "./Genere.module.css";

const Genere = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className={style.main}>
                <div className="container">
                    <h2 className={style.title}>Жанры фильмов</h2>
                    <ul className={style.list}>
                        {dataGenereFilm.map((item) => {
                            return <GenereItem imges={item.imges} genere={item.genere} />;
                        })}
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Genere;
