import style from "./Main.module.scss"
import elseStyle from '../Styles/Styles.module.scss'
import * as React from "react";
import {TitleH2} from "../Components/Title/TitleH2";
import image from "../assets/images/me.jpg"
import {Button} from "../Components/Buttoon/Button";



export const Main = React.forwardRef((props, ref) => {

    return (
        <div ref={ref} className={`${style.mainWrapper} ${elseStyle.rawBox}`}>
            <div id='main' className={`${style.main} ${elseStyle.container}`}>
                <div className={style.mainText}>
                    <div style={{backgroundImage: `url(${image})`}}
                         className={style.mainFoto}></div>
                </div>
                <div className={style.mainText}>
                    <TitleH2 text={'About me'}/>
                    <h3>{'Lis Uladzimir'}</h3>
                    <p>
                        I am react developer
                    </p>
                    <Button buttonName={'Download Printable Resume'} />
                </div>


            </div>
        </div>
    )
})


