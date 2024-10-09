import style from "./BtnFavorites.module.css";

const BtnFavoritesNoAuth = ({...props}) => {
    return (
        <button {...props} className={style.favorites}>
            <img src="/imgs/on=false.svg" alt="Не в избранном" />
        </button>
     );
}

export default BtnFavoritesNoAuth;