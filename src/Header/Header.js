import style from './Header.module.css'
import elseStyle from '../Styles/Styles.module.scss'
import {Nav} from "./Nav/Nav";


export function Header() {
    return (
        <div className={`${style.headerWrapper} ${elseStyle.rawBox}`}>
            <div className={`${style.header} ${elseStyle.container}`}>
                <Nav/>
            </div>

        </div>
    );
}

