import style from "./inputAuth.module.css";

const InputAuth = ({ img, placeholder, auth, setAuth, isName, hasError, setErrorMassage }) => {
    const handleInputChange = (e) => {
        setAuth((prev) => ({ ...prev, [isName]: e.target.value }));

        // Сбрасываем ошибку при изменении в поле
        setErrorMassage((prev) => ({
            ...prev,
            [`${isName}Error`]: false,
            massagePassword: "",
            massageUser:"",
        }));
    };

    return (
        <div className={`${style.auth} ${hasError ? style.error : ""}`}>
            <img className={`${style.img__auth} ${hasError ? style.img__auth_error : ""}`} src={img} alt="" />
            <input
                value={auth}
                onChange={handleInputChange}
                placeholder={placeholder}
                className={`${style.input__auth} ${hasError ? style.input__auth_error : ""}`}
                type="text"
            />
        </div>
    );
};

export default InputAuth;


// onChange={(e) => setRegInfo({...regInfo, ['name']: e.target.value})}
