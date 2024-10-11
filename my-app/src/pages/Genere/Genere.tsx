import { NavLink } from "react-router-dom";
import { useMovieGenereQuery } from "../../api/cinemaGuideApi";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { renderContent } from "../../utils/renderContent";
import style from "./Genere.module.css";

const Genere = () => {
    const { data, isLoading, isError } = useMovieGenereQuery();

    const content = renderContent(isLoading, isError);
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
                    <h2 className={style.title}>Жанры фильмов</h2>

                    <ul className={style.list}>
                        {data.map((genere, index) => {
                            return (
                                <NavLink key={index} className={style.link} to={`/genere/${genere}`}>
                                    <li className={style.item}>
                                        <p className={style.text}>{genere}</p>
                                    </li>
                                </NavLink>
                            );
                        })}
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Genere;
