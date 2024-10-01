import style from "./Loading.module.css";

const Loading = () => {
    return (
        <div className={style.spinner__wrapper}>
            <div className={style.spinner1}></div>
        </div>
    );
}

export default Loading ;