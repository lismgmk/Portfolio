import style from "./Progects.module.scss";
import {Button} from "../Components/Buttoon/Button";


export function Progect(props) {


    const progectFunc = props.func.map(i => {
            return <div className={style.progectFuncItem}>{i}</div>
        }
    )
    console.log(progectFunc)
    return (
        <div className={style.progectBox}>
            <div className={style.progectBoxIcon} style={props.style}>
                <Button href={props.href2project} buttonName={props.buttonNameProject}/>
                <Button href={props.href2code} buttonName={props.buttonNameCode}/>
            </div>
            <div className={style.progectBoxText}>
                <h3 className={style.progectH3title}>{props.name}</h3>
                <span className={style.progectSpan}>Used libraries: </span>
                <p className={style.progecLibraris}>  {props.usedLibraries}</p>
                <span className={style.progectSpan}>What can you do in this project: </span>
                <p className={style.progectFunc}> {Array.isArray(props.func) && progectFunc}</p>

                <p className={style.psNotification}>* If the project cannot be loaded, it means it is in the "loading"
                    state to GitHub Pages. In this case see the code. This project is in development status... </p>
            </div>
        </div>
    )
}


