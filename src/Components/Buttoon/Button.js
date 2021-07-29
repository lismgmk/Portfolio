import style from "./Button.module.scss"


export function Button(props) {
    return (
        <div>
            <a className={style.btns} href=''>{props.buttonName}</a>
        </div>
    )
}


