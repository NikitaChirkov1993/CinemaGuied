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
                </div>
            </div>
        </footer>
    );
};

export default Footer;
