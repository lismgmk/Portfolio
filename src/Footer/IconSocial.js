import style from "./Footer.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export function IconSocial(props) {
    return (
        <>
            <div className={style.footerBoxSocial}>
                <a href={props.link} target="_blank">
                    <div className={style.faCircle}>
                        <FontAwesomeIcon
                            fixedWidth
                            icon={props.name}
                            size="2x"
                        />
                    </div>
                </a>
            </div>

        </>
    )
}
