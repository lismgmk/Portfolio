import style from "./Progects.module.scss";
import elseStyle from '../Styles/Styles.module.scss';
import {Progect} from "./Progect";
import {TitleH2} from "../Components/Title/TitleH2";
import socialImage from "../assets/images/socialNetwork.jpg";
import toDoListImage from "../assets/images/todoList.jpg";


export function Progects() {
    const socialImageStyle = {
        backgroundImage: `url(${socialImage})`
    };
    const toDoListImageStyle = {
        backgroundImage: `url(${toDoListImage})`
    };

    // {`${style.progectsWrapper} ${elseStyle.rawBox}`}
    return (
        <div id='progects' className={elseStyle.rawBox}>
            <div className={`${style.progects} ${elseStyle.container}`}>
                <TitleH2 text={'Мои проекты'}/>
                <div className={style.progectsBlock}>
                    <Progect
                        style={socialImageStyle}
                        name={'Social Network'}
                        text={'React + TS'}

                    />
                    <Progect
                        style={toDoListImageStyle}
                        img={'image2'}
                        name={'ToDo List'}
                        text={'React + TS'}

                    />

                </div>
            </div>
        </div>
    );
}


