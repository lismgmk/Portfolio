import style from "./Skils.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export const Skil = (props) => {
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
                <p>{props.text}</p>
            </div>
        </div>
    );
}


