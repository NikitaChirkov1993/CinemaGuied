import style from "./ModalRegister.module.css";

const ModalRegister = ({ children, modalRegister, setModalRegister }) => {
    const rootClasses = [style.myModal];
    if (modalRegister) {
        rootClasses.push(style.active)
    }
    return (
        <div className={rootClasses.join(" ")} onClick={() => setModalRegister(false)}>
            <div className={style.myModalContent} onClick={(e)=> e.stopPropagation()} >
                {children}
            </div>
        </div>
     );
}

export default ModalRegister ;