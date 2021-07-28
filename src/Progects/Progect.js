import style from "./Progects.module.css"
import elseStyle from '../Styles/Styles.module.css'

export function Progect(props) {
    return (
        <div className={style.progectBox}>
            <div className={style.progectBoxIcon}>
                <div>{props.img}</div>
                <a href=''>Смотреть</a>
            </div>
            <div className={style.progectBoxText}>
                <h3>{props.name}</h3>
                <span>{props.text}</span>
            </div>
        </div>
    );
}


