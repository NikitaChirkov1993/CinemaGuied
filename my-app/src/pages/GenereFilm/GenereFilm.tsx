import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useMovieQuery } from "../../api/cinemaGuideApi";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import BtnBrandActive from "../../components/ui/Buttons/BtnBrandActive/BtnBrandActive";
import Loading from "../../components/ui/Loading/Loading";
import style from "./GenereFilm.module.css";

const GenereFilm = () => {

    const [page, setPage] = useState<number>(0);

    const { genere } = useParams();

    const { data, isLoading, refetch, error } = useMovieQuery({
        page: page,
        genre: genere,
        count:50,
    });
    if (isLoading) {
        return <Loading />; // Можно отобразить индикатор загрузки
    }
    if (error) {
        return <div>Error: {error.message}</div>; // Обработка ошибок
    }

    if (!data) {
        return <div>Нет доступных данных!</div>; // Если данные все еще недоступны
    }

    const plusPage = () => {
        setPage((prevPage) => prevPage + 1);
        refetch(); // Перезапрашиваем данные
    };

    const minusPage = () => {
        setPage((prevPage) => prevPage - 1);
        refetch();
    };

    return (
        <div className="wrapper">
            <Header />
            <main className={style.main}>
                <div className="container">
                    <h2 className={style.title}>{genere ? genere : "Content not found"}</h2>
                    <ul className={style.list}>
                        {data.map((item) => {
                            return (
                                <NavLink key={item.id} className={style.link} to={`/aboutFilm/${item.id}`}>
                                    <li className={style.item}>
                                        {item.posterUrl ? (
                                            <img className={style.imges} src={item.posterUrl} alt="Афиша" />
                                        ) : (
                                            <img className={style.item__img} src="./../../../public/imgs/no.png" alt="filmNO" />
                                        )}
                                    </li>
                                </NavLink>
                            );
                        })}
                    </ul>
                    <div className={style.btn__wrapper}>
                        {page > 0 && <BtnBrandActive onClick={minusPage}>Назад</BtnBrandActive>}
                        <BtnBrandActive onClick={plusPage}>Показать ещё</BtnBrandActive>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default GenereFilm;
