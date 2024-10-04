import style from "./inputAuth.module.css";

const InputAuth = ({ img, placeholder, auth, setAuth, isName }) => {
    return (
        <div className={style.auth}>
            <img  className={style.img__auth} src={img} alt="" />
            <div className={style.img__auth}></div>

            <input

                value={auth}
                // onChange={(e) =>setAuth({...auth,[isName]:e.target.value}) }
                onChange={(e) => setAuth((prev) => ({ ...prev, [isName]: e.target.value }))}
                placeholder={placeholder}
                className={style.input__auth}
                type="text"
            />
        </div>
    );
};

export default InputAuth;

// onChange={(e) => setRegInfo({...regInfo, ['name']: e.target.value})}
