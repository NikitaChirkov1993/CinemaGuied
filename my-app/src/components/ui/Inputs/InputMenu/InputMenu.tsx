import style from "./InputMenu.module.css";

const InputMenu = () => {
    return (
        <div className={style.input__menu}>
            <img className={style.input__img} src="/imgs/search.svg" alt="" />
            <input placeholder="Поиск" className={style.input__serch} type="text" />
        </div>
     );
}

export default InputMenu;