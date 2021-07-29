import style from "./Skils.module.scss"

export function Skil(props) {
    return (
        <div className={style.skilBox}>
            <div className={style.skilBoxIcon}>
                {props.img}
            </div>
            <div className={style.skilBoxText}>
                <h3>{props.skil}</h3>
                <span>{props.text}</span>
            </div>
        </div>
    );
}


