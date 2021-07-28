import style from "./Progects.module.css";
import elseStyle from '../Styles/Styles.module.css';
import {Progect} from "./Progect";
import {TitleH2} from "../Components/Title/TitleH2";

export function Progects() {
    return (
        <div className={style.progectsWrapper}>
            <div className={`${style.progects} ${elseStyle.container}`}>
               <TitleH2 text={'Мои проекты'}/>

                <div className={style.progectsBlock}>
                    <Progect img={'image1'} name={'Social Network'} text={'React + TS'}/>
                    <Progect img={'image2'} name={'ToDo List'} text={'React + TS'}/>

                </div>
            </div>
        </div>
    );
}


