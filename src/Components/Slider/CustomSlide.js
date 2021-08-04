import React from "react";
import style from "./slider.module.scss"


export const CustomSlide = (props) => {

    return (
        <div className={style.customSlideWrapper}
             style={props.styleBg}>
            <h1>{props.text}</h1>
            <p>{props.description}</p>
                <a className={style.btns} href={`#${props.nameId}`}>{props.buttonName}</a>
        </div>
    )
}