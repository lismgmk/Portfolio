import style from "./Skils.module.scss";
import elseStyle from '../Styles/Styles.module.scss';
import {Skil} from "./Skil";
import {TitleH2} from "../Components/Title/TitleH2";
import { faReact} from '@fortawesome/free-brands-svg-icons';
import { faHtml5} from '@fortawesome/free-brands-svg-icons';
import { faCss3} from '@fortawesome/free-brands-svg-icons';
import { faJs} from '@fortawesome/free-brands-svg-icons';



export function Skils() {
    return (
        <div id='skils' className={elseStyle.rawBox}>
            <div className={`${style.skils} ${elseStyle.container}`}>
                <TitleH2 text={'Навыки'}/>
                <div className={style.skilsBlock}>
                    <Skil img={faHtml5} skil={'HTML'} text={'Знание HTML'}/>
                    <Skil img={faCss3} skil={'HTML'} text={'Знание HTML'}/>
                    <Skil img={faJs} skil={'HTML'} text={'Знание HTML'}/>
                    <Skil img={faReact} skil={'HTML'} text={'Знание HTML'}/>

                </div>
            </div>
        </div>
    );
}


