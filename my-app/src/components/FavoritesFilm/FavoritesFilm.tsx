import { NavLink } from "react-router-dom";
import { useDeleteFavoritesMutation } from "../../api/cinemaGuideApi";
import Loading from "../ui/Loading/Loading";
import style from "./FavoritesFilm.module.css";

const FavoritesFilm = ({ imges, id, refetchFavorites }: { imges: string; id: number;refetchFavorites: () => Promise<void>; }) => {
    const movieId = Number(id);
    const [deleteFilm, { isLoading: isLoadingDelete }] = useDeleteFavoritesMutation();

    if (isLoadingDelete) {
        return <Loading/>
    }
    const handeleDelete = async () => {
        try {
            await deleteFilm(movieId).unwrap();
            refetchFavorites();
        } catch (error) {
            console.error("Ошибка при удаление", error);
        }

        // window.location.reload();
    };

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
