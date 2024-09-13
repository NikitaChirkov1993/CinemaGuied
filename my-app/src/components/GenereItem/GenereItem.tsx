import style from "./GenereItem.module.css";

const GenereItem = ({ imges,genere }) => {
    return (
        <li className={style.item}>
            <img className={style.imges} src={imges} alt="" />
            <p className={style.text}>{ genere}</p>
        </li>
    );
};

export default GenereItem;
