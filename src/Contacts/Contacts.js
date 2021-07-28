import style from "./Contacts.module.css";
import elseStyle from '../Styles/Styles.module.css';
import {TitleH2} from "../Components/Title/TitleH2";

export function Contacts() {
    return (
        <div className={style.сontactsWrapper}>
            <div className={`${style.сontacts} ${elseStyle.container}`}>
                <TitleH2 text={'Контакты'}/>
                <form className={style.сontactsForm}>

                        <input  className={style.сontactsFormInput}  type='text'/>

                        <input className={style.сontactsFormInput} type='text'/>

                        <textarea className={style.сontactsFormInput} type='text'/>
                   <div>
                       <button type='submit'>Связаться</button>
                   </div>

                </form>


            </div>
        </div>
    )
}


