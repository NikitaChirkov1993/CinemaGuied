import { useParams } from "react-router-dom";
import { useMovieIdQuery } from "../../api/cinemaGuideApi";
import AboutFilmItem from "../../components/AboutFilmItem/AboutFilmItem";
import AboutFilmPoster from "../../components/AboutFilmPoster/AboutFilmPoster";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Loading from "../../components/ui/Loading/Loading";
import style from "./AboutFilm.module.css";

const AboutFilm = () => {



    const { id } = useParams<{ id: string }>();
    const movieId = Number(id);

    const { data, isFetching, error } = useMovieIdQuery(movieId);
    console.log(data,"dataAboutFilm");


    if (isFetching) {
        return <Loading />; // Можно отобразить индикатор загрузки
    }
    if (error) {
        return <div>Error: {error.message}</div>;
        // Обработка ошибок
    }

    if (!data) {
        return <div>No data available</div>; // Если данные все еще недоступны
    }

    const dataAboutFilm = [
        {   id:1,
            title:"Язык оригинала",
            value:data.language,
        },
        {   id:2,
            title:"Бюджет",
            value:data.budget ? (`${data.budget} руб.`) : (data.budget),
        },
        {   id:3,
            title:"Выручка",
            value:data.revenue ? (`${data.revenue} руб.`) : (data.revenue),
        },
        {   id:4,
            title:"Режиссёр",
            value:data.director,
        },
        {   id:5,
            title:"Продакшен",
            value:data.production,
        },
        {   id:6,
            title:"Награды",
            value:data.awardsSummary,
        },
    ]
    return (
        <div className="wrapper">
            <Header />
            <main className={style.main}>
                <div className="container">
                    <AboutFilmPoster data={ data} />
                    <h3 className={style.title}>О фильме</h3>
                    <ul className={style.list}>
                        {dataAboutFilm.map((item) => {
                            return (
                                <AboutFilmItem
                                    key={item.id}
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
