import style from "./Skils.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export function Skil(props) {
    return (
        <div className={style.skilBox}>
            <div className={style.skilBoxIcon}>
                <FontAwesomeIcon
                    icon={props.img}
                    size="10x"
                    fixedWidth
                />
            </div>

            <div className={style.skilBoxText}>
                <h3>{props.skil}</h3>
                <span>{props.text}</span>
            </div>
        </div>
    );
}


