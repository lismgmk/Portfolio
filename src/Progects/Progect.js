import style from "./Progects.module.css"
import elseStyle from '../Styles/Styles.module.css'

export function Progect(props) {
    return (
        <div className={style.progectBox}>
            <div className={style.progectBoxIcon} style={props.style}>
                <a className={elseStyle.btns} href=''>Смотреть</a>
            </div>
            <div className={style.progectBoxText}>
                <h3 className={elseStyle.progectH3title}>{props.name}</h3>
                <p className={elseStyle.progectP}>{props.text}</p>
            </div>
        </div>
    );
}


