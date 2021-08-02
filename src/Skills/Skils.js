import style from "./Skils.module.scss";
import elseStyle from '../Styles/Styles.module.scss';
import {Skil} from "./Skil";
import {TitleH2} from "../Components/Title/TitleH2";
import { faReact} from '@fortawesome/free-brands-svg-icons';
import { faHtml5} from '@fortawesome/free-brands-svg-icons';
import { faCss3} from '@fortawesome/free-brands-svg-icons';
import { faJs} from '@fortawesome/free-brands-svg-icons';
import * as React from "react";



export const Skils = React.forwardRef((props, ref)=> {
    return (
        <div ref={ref} id='skils' className={elseStyle.rawBox}>
            <div className={`${style.skils} ${elseStyle.container}`}>
                <TitleH2 text={'Skils'}/>
                <div className={style.skilsBlock}>
                    <Skil img={faHtml5} skil={'HTML'} text={'HTML5'}/>
                    <Skil img={faCss3} skil={'CSS3'} text={'CSS3'}/>
                    <Skil img={faJs} skil={'JavaScript'} text={'JavaScript'}/>
                    <Skil img={faReact} skil={'React'} text={' React, Redux'}/>

                </div>
            </div>
        </div>
    );
})


