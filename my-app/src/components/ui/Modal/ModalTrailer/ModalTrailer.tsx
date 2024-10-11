import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, selectModalTrailer } from "../../../../redux/modalTrailerSlice";
import style from "./ModalTrailer.module.css";

const ModalTrailer = ({ movieId }:{movieId:string}) => {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const videoSrc = `https://www.youtube.com/embed/${movieId}?enablejsapi=1`;

    const dispatch = useDispatch();
    const isModalOpen = useSelector(selectModalTrailer);

    const handleClose = () => {
        dispatch(closeModal());
        if (iframeRef.current) {
            iframeRef.current.src = "";
        }
    };

    const handleOpen = () => {
        if (iframeRef.current) {
            iframeRef.current.src = videoSrc;
        }
    };

    const rootClasses = [style.myModal];
    if (isModalOpen) {
        rootClasses.push(style.active);
        handleOpen();
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
