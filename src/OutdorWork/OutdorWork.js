import style from "./OutdorWork.module.scss";
import elseStyle from '../Styles/Styles.module.scss';
import {TitleH2} from "../Components/Title/TitleH2";
import {Button} from "../Components/Buttoon/Button";

export function OutdorWork() {
    return (
        <div  className={elseStyle.rawBox}>
            <div className={`${style.outdorWork} ${elseStyle.container}`}>
                <TitleH2 text={'The ability to work online'}/>
                <Button buttonName={'hire me'} />
            </div>
        </div>
    );
}


