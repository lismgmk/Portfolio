import style from "./Progects.module.scss";
import {Button} from "../Components/Buttoon/Button";


export function Progect(props) {
    return (
        <div className={style.progectBox}>
            <div className={style.progectBoxIcon} style={props.style}>
                <Button href={props.href} buttonName={'See project'}/>
            </div>
            <div className={style.progectBoxText}>
                <h3 className={style.progectH3title}>{props.name}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    );
}


