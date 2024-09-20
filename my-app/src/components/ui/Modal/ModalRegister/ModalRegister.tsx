import { dataAuth } from "../../../../data/dataAuth";
import BtnBrandActive from "../../Buttons/BtnBrandActive/BtnBrandActive";
import InputAuth from "../../Inputs/InputAuth/InputAuth";
import style from "./ModalRegister.module.css";

const ModalRegister = ({ setModalRegisterOK, setModalLogin, modalRegister, setModalRegister }) => {
    const rootClasses = [style.myModal];
    if (modalRegister) {
        rootClasses.push(style.active);
    }
    return (
        <div className={rootClasses.join(" ")} onClick={() => setModalRegister(false)}>
            <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
                <div className={style.auth__wrapper}>
                    <img className={style.auth__logo} src="/imgs/logo.svg" alt="Логотип" />
                    <h3 className={style.regitser__title}>Регистрация</h3>
                    <div className={style.authInput__wrapper}>
                        <InputAuth img={dataAuth[0].img} placeholder={dataAuth[0].placeholder} />
                        <InputAuth img={dataAuth[1].img} placeholder={dataAuth[1].placeholder1} />
                        <InputAuth img={dataAuth[1].img} placeholder={dataAuth[1].placeholder2} />
                        <InputAuth img={dataAuth[2].img} placeholder={dataAuth[2].placeholder1} />
                        <InputAuth img={dataAuth[2].img} placeholder={dataAuth[2].placeholder2} />
                    </div>
                    <BtnBrandActive
                        onClick={() => {
                            setModalRegister(false);
                            setModalRegisterOK(true);
                        }}>
                        Создать аккаунт
                    </BtnBrandActive>
                    <div
                        onClick={() => {
                            setModalRegister(false);
                            setModalLogin(true);
                        }}
                        className={style.auth__text}>
                        У меня есть пароль
                    </div>
                </div>
                <img
                    onClick={() => {
                        setModalRegister(false);
                    }}
                    className={style.imges__close}
                    src={dataAuth[0].imgClose}
                    alt="Закрыть"
                />
            </div>
        </div>
    );
};

export default ModalRegister;
