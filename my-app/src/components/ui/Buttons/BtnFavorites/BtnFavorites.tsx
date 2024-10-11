import { FC, useState } from "react";
import { useDeleteFavoritesMutation, useGetFavoritesQuery, usePostFavoritesMutation } from "../../../../api/cinemaGuideApi";
import style from "./BtnFavorites.module.css";

interface BtnBrandActiveProps  {
    id:number
}

const BtnFavorites: FC<BtnBrandActiveProps> = ({ id }) => {
    const favoritesID = id ? id.toString() : "";

    const { data:dataGetFavorites,refetch:refetchGetFavorites } = useGetFavoritesQuery();
    const isFavoritesInitial = dataGetFavorites?.find((item) => item.id === id) ? true : false;
    const [isFavorites, setIsFavorites] = useState(isFavoritesInitial);

    //ДОБОВЛЕНИЕ ФИЛЬМА:
    const [postFavorites,] = usePostFavoritesMutation();
    const handleAddFavorites = async () => {

        try {
            await postFavorites(favoritesID).unwrap();
            setIsFavorites((prev) => !prev);
            refetchGetFavorites();
        } catch (error) {
            console.log("Ошибка при добовление",error);
        }
    };

    //УДАЛЕНИЕ ФИЛЬМА:
    const [deleteFilm, ] = useDeleteFavoritesMutation();
    const handeleDeleteFavorites = async () => {
        try {
            await deleteFilm(id).unwrap();
            setIsFavorites((prev) => !prev);
            refetchGetFavorites();
        } catch (error) {
            console.error("Ошибка при удаление", error);
        }
    };

    return (
        <>
        {!isFavorites ?
            <button className={style.favorites} onClick={handleAddFavorites}>
                 <img src="/imgs/on=false.svg" alt="Не в избранном" />
            </button>
            :
            <button className={style.favorites} onClick={handeleDeleteFavorites }>
                 <img src="/imgs/on=true.svg" alt="В избранном" />
            </button>
        }
    </>

    );
};

export default BtnFavorites;
