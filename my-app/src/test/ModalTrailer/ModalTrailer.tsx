import { useRef } from "react";
import style from "./ModalTrailer.module.css";

const ModalTrailer = ({ modalTrailer, setModalTrailer,  }) => {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const videoSrc = "https://www.youtube.com/embed/7sy1-jinveo?enablejsapi=1"; // Исходная ссылка на видео

    const handleClose = () => {
        setModalTrailer(false);
        if (iframeRef.current) {
            iframeRef.current.src = ""; // Останавливаем видео
        }
    };

    const handleOpen = () => {
        if (iframeRef.current) {
            iframeRef.current.src = videoSrc; // Устанавливаем src при открытии
        }
    };

    const rootClasses = [style.myModal];
    if (modalTrailer) {
        rootClasses.push(style.active);
        handleOpen(); // Устанавливаем src, когда модальное окно открывается
    }

    return (
        <div className={rootClasses.join(" ")} onClick={handleClose}>
            <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
                <div onClick={handleClose} className={style.close}>
                    <img src="/imgs/delete.svg" alt="Закрыть" />
                </div>
                <iframe
                    ref={iframeRef}
                    className={style.video}
                    src={modalTrailer ? videoSrc : ""}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
                {/* {children} */}
            </div>
        </div>
    );
};

export default ModalTrailer;
