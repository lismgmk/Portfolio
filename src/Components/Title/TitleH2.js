import style from "./TitleH2.module.css";

export function TitleH2(props) {
    return (
        <div className={style.title}>
            <h2>{props.text}</h2>
        </div>
    )
}


