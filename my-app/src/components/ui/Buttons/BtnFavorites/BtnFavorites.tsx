import { useState } from "react";
import { useDeleteFavoritesMutation, useGetFavoritesQuery, usePostFavoritesMutation } from "../../../../api/cinemaGuideApi";
import Loading from "../../Loading/Loading";
import style from "./BtnFavorites.module.css";

const BtnFavorites = ({ id }: { id: number  }) => {
    const favoritesID = id ? id.toString() : "";  // Проверяем, что id существует

    const { data:dataGetFavorites,refetch:refetchGetFavorites } = useGetFavoritesQuery();
    const isFavoritesInitial = dataGetFavorites?.find((item) => item.id === id) ? true : false;
    const [isFavorites, setIsFavorites] = useState(isFavoritesInitial);

    //ДОБОВЛЕНИЕ ФИЛЬМА:
    const [postFavorites, { isLoading:isLoadingPostFavorites }] = usePostFavoritesMutation();
    const handleAddFavorites = async () => {

        try {
            await postFavorites(favoritesID).unwrap();
            setIsFavorites((prev) => !prev);
            refetchGetFavorites();
        } catch (error) {
            console.log(error);
        }
    };

    //УДАЛЕНИЕ ФИЛЬМА:
    const [deleteFilm, { isLoading: isLoadingDelete }] = useDeleteFavoritesMutation();
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
                {isLoadingPostFavorites ? <Loading /> : <img src="/imgs/on=false.svg" alt="Не в избранном" />}
            </button>
            :
            <button className={style.favorites} onClick={handeleDeleteFavorites }>
                {isLoadingDelete ? <Loading /> : <img src="/imgs/on=true.svg" alt="В избранном" />}
            </button>
        }
    </>


    );
};

export default BtnFavorites;

{/* <button className={style.favorites} onClick={handleToggleFavorites}>
            {!isFavorites ?
                <img src="/imgs/on=false.svg" alt="Не в избранном" />
             :
                <img src="/imgs/on=true.svg" alt="В избранном" />
            }
        </button> */}
