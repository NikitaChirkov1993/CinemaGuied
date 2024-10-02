import style from "./AboutFilmItem.module.css";

const AboutFilmItem = ({ title, value }) => {


    return (
        <li className={style.item}>

            <p className={[style.text, style.textMedia600].join(" ")}>{title}
            </p>
            <span className={style.dots}></span>
            <p className={style.text}>{value ? value : (<span>-</span>)}</p>
        </li>
    );
};

export default AboutFilmItem;
