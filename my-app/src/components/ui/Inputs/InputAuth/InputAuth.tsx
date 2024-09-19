import style from "./inputAuth.module.css";

const InputAuth = ({img,placeholder}) => {
    return (
        <div className={style.auth}>
            <img className={style.img__auth} src={img} alt="" />
            <input placeholder={placeholder} className={style.input__auth} type="text" />
        </div>
    );
};

export default InputAuth;
