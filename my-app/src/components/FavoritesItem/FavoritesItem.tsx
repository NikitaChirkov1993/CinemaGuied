import style from "./FavoritesItem.module.css";

const FavoritesItem = ({imges}) => {
    return (<li className={style.item}>
        <img src="./../../../public/imgs/filmBackground/sherlock.png" alt="Аватар фильма" />
    </li> );
}

export default FavoritesItem;