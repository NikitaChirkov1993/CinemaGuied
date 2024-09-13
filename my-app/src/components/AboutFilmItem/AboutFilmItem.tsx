import style from "./AboutFilmItem.module.css";

const AboutFilmItem = ({title,value}) => {
    return (<li className={style.item}>
        <p>{ title}</p>
        <p>{ value}</p>
    </li> );
}

export default AboutFilmItem;