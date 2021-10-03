import style from "./Main.module.scss";
import style2 from "../Components/Buttoon/Button.module.scss";
import elseStyle from '../Styles/Styles.module.scss';
import * as React from "react";
import {TitleH2} from "../Components/Title/TitleH2";
import image from "../assets/images/me.jpg";
import cv from "../assets/files/Rezume.pdf"

export const Main = () => {

    return (
        <div id='main'   className={`${style.mainWrapper} ${elseStyle.rawBox}`}>


            <div  className={`${style.main} ${elseStyle.container}`}>
                <TitleH2 text={'About me'}/>
                <div className={style.boxMain}>
                    <div className={style.mainText}>
                        <div style={{backgroundImage: `url(${image})`}}
                             className={style.mainFoto}>
                        </div>
                    </div>
                    <div className={style.mainText}>

                        <h3>{'Lis Uladzimir'}</h3>
                        <p>
                            Front-End developer with experience in creating SPA using React, Redux, HTML, CSS, JS. Seeking a front-end developer position with acompany which will require me to utilize my skills, a bilities in the IT field to ensure the company ssuccess. Ready to consider project work and full-time employment. In the future I see myself as a Full Stack Developer.
                        </p>
                        <a download className={style2.btns} href={cv}>Download Resume</a>
                    </div>
                </div>

            </div>
        </div>
    )
}


