import style from "./BtnMix.module.css";

const BtnMix = () => {
    return (
        <button className={style.mix}>
            <img src="/imgs/mix.svg" alt="Перемешать" />
        </button>
    );
};

export default BtnMix;
