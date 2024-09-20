import { dataAuth } from "../../../../data/dataAuth";
import BtnBrandActive from "../../Buttons/BtnBrandActive/BtnBrandActive";
import style from "./ModalRegitserOK.module.css";

const ModalRegitserOK = ({ setModalLogin, modalRegisterOK, setModalRegisterOK }) => {
    const rootClasses = [style.myModal];
    if (modalRegisterOK) {
        rootClasses.push(style.active);
    }
    return (
        <div className={rootClasses.join(" ")} onClick={() => setModalRegisterOK(false)}>
            <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
                <div className={style.auth__wrapper}>
                    <img className={style.auth__logo} src="/imgs/logo.svg" alt="Логотип" />
                    <h3 className={style.regitser__title}>Регистрация завершина</h3>
                    <p className={style.registerOK__text}>Используйте вашу электронную почту для входа</p>
                    <BtnBrandActive
                        onClick={() => {
                            setModalRegisterOK(false);
                            setModalLogin(true);
                        }}>
                        Войти
                    </BtnBrandActive>
                </div>
                <img
                    onClick={() => {
                        setModalRegisterOK(false);
                    }}
                    className={style.imges__close}
                    src={dataAuth[0].imgClose}
                    alt="Закрыть"
                />
            </div>
        </div>
    );
};

export default ModalRegitserOK;
