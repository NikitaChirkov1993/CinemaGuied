import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.footer__info}>
                    <div className={style.wrapper__text}>
                        <p className={style.text1}>LLC «Мультимедиа Визион»</p>

                        <div className={style.block__text2}>
                            <img src="/imgs/reserved.svg " alt="" />
                            <p className={style.text2}>Все права защищены </p>
                        </div>
                    </div>
                    {/* <div className={style.wrapper__icon}>
                        <a href="https://vk.com/id60207388" target="blank" className={style.icon}>
                            <img src="/imgs/vk.svg" alt="vk" />
                        </a>
                        <a href="https://www.youtube.com/" target="blank" className={style.icon}>
                            <img src="/imgs/youtube.svg" alt="youtube" />
                        </a>
                        <a href="https://t.me/NikitaChirkovSerg" target="blank" className={style.icon}>
                            <img src="/imgs/telegram.svg" alt="telegram" />
                        </a>
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
