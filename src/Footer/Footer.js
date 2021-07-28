import style from "./Footer.module.css";
import elseStyle from '../Styles/Styles.module.css';

export function Footer() {
    return (
        <div className={style.footerWrapper}>
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


