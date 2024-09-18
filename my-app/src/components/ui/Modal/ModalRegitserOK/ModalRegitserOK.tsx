import style from "./ModalRegitserOK.module.css";

const ModalRegitserOK = ({ children, modalRegisterOK, setModalRegisterOK }) => {
    const rootClasses = [style.myModal];
    if (modalRegisterOK) {
        rootClasses.push(style.active)
    }
    return (
        <div className={rootClasses.join(" ")} onClick={() => setModalRegisterOK(false)}>
            <div className={style.myModalContent} onClick={(e)=> e.stopPropagation()} >
                {children}
            </div>
        </div>
     );
}

export default ModalRegitserOK ;