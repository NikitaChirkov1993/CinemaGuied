import style from "./BtnBrandActive.module.css";

const BtnBrandActive = ({children}) => {
    return (
        <button className={style.btn__trailer}>
            {children}
        </button>
     );
}

export default BtnBrandActive;