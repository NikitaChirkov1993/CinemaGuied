import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMovieQuery } from "../../api/cinemaGuideApi";
import Footer from "../../components/Footer/Footer";
import GenereLocalItem from "../../components/GenereLocalItem/GenereLocalItem";
import Header from "../../components/Header/Header";
import BtnBrandActive from "../../components/ui/Buttons/BtnBrandActive/BtnBrandActive";
import Loading from "../../components/ui/Loading/Loading";
import style from "./GenereLocal.module.css";

const GenereLocal = () => {
    const [count, setСount] = useState(10);
    const [page, setPage] = useState(1); // Текущая страница
    const [hasMore, setHasMore] = useState(true); // Состояние для отслеживания, есть ли еще фильмы


    const { genere } = useParams();

    const { data, isLoading, refetch, error } = useMovieQuery({
        count: 50,
        page: page ,
        genre: genere,
    });
    if (isLoading) {
        return <Loading/>; // Можно отобразить индикатор загрузки
    }
    if (error) {
        return <div>Error: {error.message}</div>; // Обработка ошибок
    }

    if (!data) {
        return <div>No data available</div>; // Если данные все еще недоступны
    }

    const More10Movie = () => {
        setPage((prevPage) => prevPage + 1);
        // setСount((prevCount) => prevCount + 10); // Увеличиваем количество
        // console.log(count,"count");

        refetch(); // Перезапрашиваем данные
        if (count === 50) {
            setHasMore(false);
            return;
        }
    };



    return (
        <div className="wrapper">
            <Header />
            <main className={style.main}>
                <div className="container">
                    <h2 className={style.title}>{genere ? genere : "Content not found"}</h2>
                    <ul className={style.list}>
                        {data.map((item) => {
                            return <GenereLocalItem key={item.id} imges={item.posterUrl} id={item.id} />;
                        })}
                    </ul>
                    <div className={style.btn__wrapper}>
                        {hasMore && <BtnBrandActive onClick={More10Movie} >Показать ещё</BtnBrandActive>}

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default GenereLocal;
