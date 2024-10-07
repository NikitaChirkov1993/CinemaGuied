import style from "./BtnFavorites.module.css";

const BtnFavorites = () => {

    return (<button className={style.favorites}>
        <img src="/imgs/on=false.svg" alt="Добавить в избранное" />
        {/* <img src="/imgs/on=true.svg" alt="Добавить в избранное" /> */}
    </button> );
}

export default BtnFavorites;