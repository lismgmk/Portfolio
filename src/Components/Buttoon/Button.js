import style from "./Button.module.scss"


export function Button(props) {
    return (
        <div>
            <a target="_blank" className={style.btns} href={`${props.href}`}>{props.buttonName}</a>
        </div>
    )
}


