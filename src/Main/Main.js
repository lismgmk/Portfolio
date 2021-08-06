import style from "./Main.module.scss"
import elseStyle from '../Styles/Styles.module.scss'
import * as React from "react";
import {TitleH2} from "../Components/Title/TitleH2";
import image from "../assets/images/me.jpg"
import {Button} from "../Components/Buttoon/Button";


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
                            Front-End developer with e x p e rie n c e in creating SPA using  React, Redux ,HTML,CSS, JS. Seeking a front- end developer position with a c o m p a n y which will require me to utilize my skills, a bilitie s in t h e IT field t o ensure the company's s u c c e s s. R e a d y to consider project work and full-time employment. In the future I s e e myself as a Full Stack Developer.
                        </p>
                        <Button buttonName={'Download Resume'} />
                    </div>
                </div>

            </div>
        </div>
    )
}


