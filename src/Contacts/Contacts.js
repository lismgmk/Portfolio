import elseStyle from "../Styles/Styles.module.scss"
import style from "./Contacts.module.scss";
import styleButton from '../Components/Buttoon/Button.module.scss';
import {TitleH2} from "../Components/Title/TitleH2";

export function Contacts() {
    return (
        <div className={elseStyle.rawBox}>
            <div className={`${style.сontacts} ${elseStyle.container}`}>
                <TitleH2 text={'Контакты'}/>
                <form className={style.сontactsForm}>
                        <input  className={style.сontactsFormInput}  type='text'/>
                        <input className={style.сontactsFormInput} type='text'/>
                        <textarea className={style.сontactsFormInput} type='text'/>
                   <div>
                       <button className={styleButton.btns} type='submit'>Связаться</button>
                   </div>

                </form>


            </div>
        </div>
    )
}


