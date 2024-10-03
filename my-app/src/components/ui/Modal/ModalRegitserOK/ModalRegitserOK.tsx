import { useDispatch, useSelector } from "react-redux";
import { dataAuth } from "../../../../data/dataAuth";
import { openModalLogin } from "../../../../redux/modalLoginSlice";
import { closeModalRegisterOk, selectModalRegisterOk } from "../../../../redux/modalRegisterOkSlice";
import BtnBrandActive from "../../Buttons/BtnBrandActive/BtnBrandActive";
import style from "./ModalRegitserOK.module.css";

const ModalRegitserOK = () => {
    const dispatch = useDispatch();
    const isModalRegisterOk = useSelector(selectModalRegisterOk);

    const rootClasses = [style.myModal];
    if (isModalRegisterOk) {
        rootClasses.push(style.active);
    }
    return (
        <div className={rootClasses.join(" ")} onClick={() => dispatch(closeModalRegisterOk())}>
            <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
                <div className={style.auth__wrapper}>
                    <img className={style.auth__logo} src="/imgs/logo.svg" alt="Логотип" />
                    <h3 className={style.regitser__title}>Регистрация завершина</h3>
                    <p className={style.registerOK__text}>Используйте вашу электронную почту для входа</p>
                    <BtnBrandActive
                        onClick={() => {
                            dispatch(closeModalRegisterOk());
                            dispatch(openModalLogin());
                        }}>
                        Войти
                    </BtnBrandActive>
                </div>
                <img
                    onClick={() => {
                        dispatch(closeModalRegisterOk());
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
