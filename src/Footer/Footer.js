import style from "./Footer.module.css";
import elseStyle from '../Styles/Styles.module.scss';

export function Footer() {
    return (
        <div className={`${style.footerWrapper} ${elseStyle.rawBox}`}>
            <div className={`${style.footer} ${elseStyle.container}`}>
                <h2>Лис Владимир</h2>
                <div className={style.footerBox}>
                    <div className={style.footerBoxSocial}></div>
                    <div className={style.footerBoxSocial}></div>
                    <div className={style.footerBoxSocial}></div>
                    <div className={style.footerBoxSocial}></div>
                </div>
            </div>
        </div>
    );
}


