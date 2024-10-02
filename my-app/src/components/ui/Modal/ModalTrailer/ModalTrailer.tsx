import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, selectModalTrailer } from "../../../../redux/modalTrailerSlice";
import style from "./ModalTrailer.module.css";

const ModalTrailer = ({ movie  }) => {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const videoSrc = `https://www.youtube.com/embed/${movie}?enablejsapi=1`; // Исходная ссылка на видео

    const dispatch = useDispatch();
    const isModalOpen = useSelector(selectModalTrailer);

    const handleClose = () => {
        dispatch(closeModal());
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
    if (isModalOpen) {
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
                    src={isModalOpen ? videoSrc : ""}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                >
                </iframe>

            </div>
        </div>
    );
};

export default ModalTrailer;
