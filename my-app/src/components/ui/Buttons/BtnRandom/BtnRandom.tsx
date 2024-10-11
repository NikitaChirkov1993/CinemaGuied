import style from "./BtnRandom.module.css";

const BtnRandom = ({...props}) => {
    return (
        <button {...props} className={style.mix}>
            <img src="/imgs/mix.svg" alt="Перемешать" />
        </button>
    );
};

export default BtnRandom;
