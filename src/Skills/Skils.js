import style from "./Skils.module.css";
import elseStyle from '../Styles/Styles.module.css';
import {Skil} from "./Skil";
import {TitleH2} from "../Components/Title/TitleH2";

export function Skils() {
    return (
        <div className={style.skilsWrapper}>
            <div className={`${style.skils} ${elseStyle.container}`}>
                <TitleH2 text={'Навыки'}/>
                <div className={style.skilsBlock}>
                    <Skil img={'image1'} skil={'HTML'} text={'Знание HTML'}/>
                    <Skil img={'image2'} skil={'CSS'} text={'Знание CSS'}/>
                    <Skil img={'image3'} skil={'JS'} text={'Знание JS'}/>

                </div>
            </div>
        </div>
    );
}


