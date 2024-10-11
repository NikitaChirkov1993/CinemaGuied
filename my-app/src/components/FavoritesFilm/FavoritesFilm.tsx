import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useDeleteFavoritesMutation } from "../../api/cinemaGuideApi";
import { renderContent } from "../../utils/renderContent";
import style from "./FavoritesFilm.module.css";

interface FavoritesFilmProps {
    imges: string;
    id: number;
    refetchFavorites: () => Promise<void>
}

const FavoritesFilm:FC<FavoritesFilmProps> = ({ imges, id, refetchFavorites }) => {
    const movieId = Number(id);
    const [deleteFilm, { isLoading,isError}] = useDeleteFavoritesMutation();

    const handeleDelete = async () => {
        try {
            await deleteFilm(movieId).unwrap();
            refetchFavorites();
        } catch (error) {
            console.error("Ошибка при удаление", error);
        }
    };

    const content = renderContent(isLoading, isError);
    if (content) {
        return content;
    }

    return (
        <li className={style.item}>
            <div className={style.wrapper}>
                <NavLink to={`/aboutFilm/${id}`}>
                    {imges ?
                        <img
                            className={style.imges}
                            src={imges}
                            alt="Аватар фильма" />
                        :
                        <img
                            className={style.item__img}
                            src="/imgs/no3.webp"
                            alt="filmNO" />}
                </NavLink>
                <div onClick={handeleDelete} className={style.icon__delete}>
                    <img src="/imgs/delete.svg" alt="Удалить" />
                </div>
            </div>
        </li>
    );
};

export default FavoritesFilm;
