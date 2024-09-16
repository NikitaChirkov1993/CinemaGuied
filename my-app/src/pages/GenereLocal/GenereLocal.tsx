import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import GenereLocalItem from "../../components/GenereLocalItem/GenereLocalItem";
import Header from "../../components/Header/Header";
import BtnBrandActive from "../../components/ui/Buttons/BtnBrandActive/BtnBrandActive";
import { dataGenereFilm } from "../../data/dataGenereFilm";
import style from "./GenereLocal.module.css";

const GenereLocal = () => {
    const { genere } = useParams();
    const genreData = dataGenereFilm.find((item) => item.genere === genere);

    return (
        <div className="wrapper">
            <Header />
            <main className={style.main}>
                <div className="container">
                    <h2 className={style.title}>{genreData ? genreData.genere : "Content not found"}</h2>
                    <ul className={style.list}>
                        {dataGenereFilm.map((item) => {
                            return <GenereLocalItem imges={item.imges} id={item.id} />;
                        })}
                    </ul>
                    <div className={style.btn__wrapper}>
                        <BtnBrandActive>Показать ещё</BtnBrandActive>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default GenereLocal;
