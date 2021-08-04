import style from "./Main.module.scss"
import elseStyle from '../Styles/Styles.module.scss'
import * as React from "react";
import {TitleH2} from "../Components/Title/TitleH2";
import image from "../assets/images/me.jpg"
import {Button} from "../Components/Buttoon/Button";
import SimpleSlider from "../Components/Slider/SliderMain";
import SliderMain from "../Components/Slider/SliderMain";
import {Box} from "@material-ui/core";



export const Main = (props) => {

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
                            I am react developer
                        </p>
                        <Button buttonName={'Download Printable Resume'} />
                    </div>
                </div>



            </div>
        </div>
    )
}


