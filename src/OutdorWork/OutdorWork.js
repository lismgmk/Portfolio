import style from "./OutdorWork.module.css";
import elseStyle from '../Styles/Styles.module.css';
import {TitleH2} from "../Components/Title/TitleH2";

export function OutdorWork() {
    return (
        <div className={style.outdorWorkWrapper}>
            <div className={`${style.outdorWork} ${elseStyle.container}`}>
                <TitleH2 text={'Возможность удаленной работы'}/>
                <a href=''>Нанять меня</a>
            </div>
        </div>
    );
}


