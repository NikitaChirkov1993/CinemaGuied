import style from "./BtnMix.module.css";

const BtnMix = ({onClick}) => {
    return (
        <button onClick={ onClick} className={style.mix}>
            <img src="/imgs/mix.svg" alt="Перемешать" />
        </button>
    );
};

export default BtnMix;
