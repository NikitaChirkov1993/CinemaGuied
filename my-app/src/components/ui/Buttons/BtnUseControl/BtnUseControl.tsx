import style from "./BtnUseControl.module.css";

const BtnUseControl = ({ children }) => {
    return (
        <button className={style.btn}>
            {children}
        </button>
    );
}

export default BtnUseControl;