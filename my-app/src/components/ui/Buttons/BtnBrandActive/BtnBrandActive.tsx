import style from "./BtnBrandActive.module.css";

const BtnBrandActive = ({children, ...props}) => {
    return (
        <button {...props} className={style.btn__trailer}>
            {children}
        </button>
     );
}

export default BtnBrandActive;