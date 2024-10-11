import { NavLink } from "react-router-dom";
import { useMovieGenereQuery } from "../../api/cinemaGuideApi";
import Footer from "../../components/Footer/Footer";
import GenereItem from "../../components/GenereItem/GenereItem";
import Header from "../../components/Header/Header";
import Loading from "../../components/ui/Loading/Loading";
import { dataGenereFilm } from "../../data/dataGenereFilm";
import style from "./Genere.module.css";

const Genere = () => {
    const { data, isLoading, isError, error } = useMovieGenereQuery();
    if (isLoading) {
        return <Loading />; // Можно отобразить индикатор загрузки
    }
    if (error) {
        return <div>Error: {error.message}</div>; // Обработка ошибок
    }

    if (!data) {
        return <div>Нет доступных данных!</div>; // Если данные все еще недоступны
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
                                        {/* <img className={style.imges} src="./../../../public/imgs/no.png" alt="" /> */}
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
