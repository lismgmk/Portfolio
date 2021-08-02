import style from "./Progects.module.scss";
import elseStyle from '../Styles/Styles.module.scss';
import {Progect} from "./Progect";
import {TitleH2} from "../Components/Title/TitleH2";
import socialImage from "../assets/images/socialNetwork.jpg";
import toDoListImage from "../assets/images/todoList.jpg";
import * as React from "react";


export const Progects = React.forwardRef((props, ref)=> {
    const socialImageStyle = {
        backgroundImage: `url(${socialImage})`
    };
    const toDoListImageStyle = {
        backgroundImage: `url(${toDoListImage})`
    };

    return (
        <div ref={ref} id='progects' className={elseStyle.rawBox}>
            <div className={`${style.progects} ${elseStyle.container}`}>
                <TitleH2 text={'My progects'}/>
                <div className={style.progectsBlock}>
                    <Progect
                        style={socialImageStyle}
                        name={'Social Network'}
                        text={'React + TS'}
                    />
                    <Progect
                        style={toDoListImageStyle}
                        img={'image2'}
                        name={'ToDo List'}
                        text={'React + TS'}
                    />

                </div>
            </div>
        </div>
    )
}
)

