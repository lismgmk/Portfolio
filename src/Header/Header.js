import style from './Header.module.scss'
import elseStyle from '../Styles/Styles.module.scss'
import {NavLinc} from "./NavLinc";

export function Header(props) {
    return (
        <div className={`${style.headerWrapper} ${elseStyle.rawBox}`}>
            <div className={`${style.header} ${elseStyle.container}`}>
                        <NavLinc name={'main'} linc={props.linkMain}/>
                        <NavLinc name={'skils'} linc={props.linkSkils}/>
                        <NavLinc name={'progects'} linc={props.linkProgects}/>
                        <NavLinc name={'contacts'} linc={props.linkContacts}/>
            </div>
        </div>
    );
}

