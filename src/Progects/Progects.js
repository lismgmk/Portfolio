import style from "./Progects.module.scss";
import elseStyle from '../Styles/Styles.module.scss';
import {Progect} from "./Progect";
import {TitleH2} from "../Components/Title/TitleH2";
import socialImage from "../assets/images/socialNetwork.jpg";
import toDoListImage from "../assets/images/todoList.jpg";
import * as React from "react";


export const Progects = (props)=> {
    const socialImageStyle = {
        backgroundImage: `url(${socialImage})`
    };
    const toDoListImageStyle = {
        backgroundImage: `url(${toDoListImage})`
    };

    return (
        <div id='progects' className={elseStyle.rawBox}>
            <div className={`${style.progects} ${elseStyle.container}`}>
                <TitleH2 text={'My progects'}/>
                <div className={style.progectsBlock}>
                    <Progect
                        style={socialImageStyle}
                        name={'Social Network'}
                        text={'My social network is an opportunity to communicate with friends, listen to music, exchange photos and likes, as well as make new acquaintances.'}
                    />
                    <Progect
                        style={toDoListImageStyle}
                        img={'image2'}
                        name={'ToDo List'}
                        text={'My todo list will help you not to forget about your business'}
                    />

                </div>
            </div>
        </div>
    )
}


