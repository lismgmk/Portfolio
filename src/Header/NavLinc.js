import style from './Header.module.scss'

export function NavLinc(props) {

    return (
        <div className={style.nav}>
            <a href={`#${props.name}`}>{props.name}</a>
        </div>
    );
}

