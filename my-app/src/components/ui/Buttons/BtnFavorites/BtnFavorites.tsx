import { useState } from "react";
import { useGetFavoritesQuery, usePostFavoritesMutation } from "../../../../api/cinemaGuideApi";
import style from "./BtnFavorites.module.css";

const BtnFavorites = ({ id }: { id: number  }) => {
    const favoritesID = id ? id.toString() : "";  // Проверяем, что id существует

    const { data:dataGetFavorites,refetch:refetchGetFavorites } = useGetFavoritesQuery();
    const isFavoritesInitial = dataGetFavorites?.find((item) => item.id === id) ? true : false;
    const [isFavorites, setIsFavorites] = useState(isFavoritesInitial);
    // console.log(id, "ID");
    // console.log(isFavoritesInitial, "isFavoritesInitial");

    //ДОБОВЛЕНИЕ ФИЛЬМА:
    const [postFavorites, { isSuccess }] = usePostFavoritesMutation();
    const handleToggleFavorites = async () => {

        try {
            await postFavorites(favoritesID).unwrap();
            setIsFavorites((prev) => !prev);
            refetchGetFavorites();
        } catch (error) {
            console.log(error);
        }
    };


    //УДАЛЕНИЕ ФИЛЬМА:
    // const [deleteFilm, { isLoading: isLoadingDelete }] = useDeleteFavoritesMutation();

    // if (isLoadingDelete) {
    //     return <Loading/>
    // }
    // const handeleDelete = async () => {
    //     try {
    //         await deleteFilm(movieId).unwrap();
    //         refetchFavorites();
    //     } catch (error) {
    //         console.error("Ошибка при удаление", error);
    //     }

    //     // window.location.reload();
    // };


    return (

        <button className={style.favorites} onClick={handleToggleFavorites}>
            {!isFavorites ?
                <img src="/imgs/on=false.svg" alt="Не в избранном" />
             :
                <img src="/imgs/on=true.svg" alt="В избранном" />
            }
        </button>
    );
};

export default BtnFavorites;
