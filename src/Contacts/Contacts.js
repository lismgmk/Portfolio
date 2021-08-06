import elseStyle from "../Styles/Styles.module.scss"
import style from "./Contacts.module.scss";
import styleButton from '../Components/Buttoon/Button.module.scss';
import {TitleH2} from "../Components/Title/TitleH2";
import * as React from "react";
import {
    faEnvelope,
    faMapMarkerAlt,
    faMobileAlt
} from "@fortawesome/free-solid-svg-icons";
import {faTelegram, faViber} from "@fortawesome/free-brands-svg-icons";
import {Contact} from "./Contact";


export const Contacts = () => {

    return (
        <div id='contacts' className={elseStyle.rawBox}>
            <div id='contacts' className={`${style.сontacts} ${elseStyle.container}`}>
                <TitleH2 text={'Contacts'}/>
                <div className={style.сontactsInfoForm}>
                    <div className={style.сontactsInfo}>
                        <h3>{'CONTACT DETAILS'}</h3>
                        <Contact
                            link={'https://goo.gl/maps/P1FjzmJJbeBm1sUr6'}
                            name={'Academician Vysotsky street, Minsk city, Belarus'}
                            elem={faMapMarkerAlt}
                            info={''}
                        />
                        <Contact
                            link={'tel:+375295051242'}
                            name={'Tel: +375(29) 505-12-42'}
                            elem={faMobileAlt}
                            info={''}
                        />
                        <Contact
                            link={'tg://resolve?domain=<lismgmk>'}
                            name={'Send me a message...'}
                            elem={faTelegram}
                            info={''}
                        />
                        <Contact
                            link={'viber://chat?number=%2B375295051242'}
                            name={'Send me a message...'}
                            elem={faViber}
                            info={''}
                        />
                        <Contact
                            link={'mailto:lismgmk2@gmail.com'}
                            name={'lismgmk2@gmail.com'}
                            elem={faEnvelope}
                            info={''}
                        />

                    </div>
                    <div className={style.contactsMessage}>
                        <h3>{'short message'}</h3>
                        <form className={style.сontactsForm}>
                            <input placeholder='Your name...' className={style.сontactsFormInput} type='text'/>
                            <input placeholder='Your email...' className={style.сontactsFormInput} type='text'/>
                            <textarea placeholder='Your message...' className={style.сontactsFormInput} type='text'/>
                            <div>
                                <button className={styleButton.btns} type='submit'>SEND MESSAGE</button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </div>
    )
}




