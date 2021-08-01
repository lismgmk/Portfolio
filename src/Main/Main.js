import style from "./Main.module.css"
import elseStyle from '../Styles/Styles.module.scss'

export function Main() {
    return (
        <div id='main' className={`${style.mainWrapper} ${elseStyle.rawBox}`}>
            <div className={`${style.main} ${elseStyle.container}`}>
                <div className={style.mainText}>
                    <span>Привет</span>
                    <h1>Mеня зовут Лис Владимир</h1>
                   <span>Я front-end разработчик</span>
                </div>
                <div className={style.mainFoto}></div>
            </div>
        </div>
    );
}


