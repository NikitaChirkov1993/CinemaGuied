import style from "./ModalLogin.module.css";

const ModalLogin = ({ children, modalLogin, setModalLogin }) => {
    const rootClasses = [style.myModal];
    if (modalLogin) {
        rootClasses.push(style.active)
    }
    return (
        <div className={rootClasses.join(" ")} onClick={() => setModalLogin(false)}>
            <div className={style.myModalContent} onClick={(e) => e.stopPropagation() }>
                {children}
            </div>
        </div>
     );
}

export default ModalLogin;