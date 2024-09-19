import style from "./ModalTrailer.module.css";

const ModalTrailer = ({ modalTrailer, setModalTrailer, children }) => {
    const rootClasses = [style.myModal];
    if (modalTrailer) {
        rootClasses.push(style.active)
    }
    return (
        <div className={rootClasses.join(" ")} onClick={() => setModalTrailer(false)}>
            <div className={style.myModalContent} onClick={(e)=> e.stopPropagation()} >
                {children}
            </div>
        </div>
     );
}

export default ModalTrailer;