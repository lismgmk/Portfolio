import style from './Header.module.css'
import elseStyle from '../Styles/Styles.module.css'
import {Nav} from "./Nav/Nav";


export function Header() {
    return (
        <div className={style.headerWrapper}>
            <div className={`${style.header} ${elseStyle.container}`}>
                <Nav/>
            </div>

        </div>
    );
}

