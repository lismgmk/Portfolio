import elseStyle from "../Styles/Styles.module.scss"
import style from "./Contacts.module.scss";
import styleButton from '../Components/Buttoon/Button.module.scss';
import {TitleH2} from "../Components/Title/TitleH2";
import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMap} from '@fortawesome/free-regular-svg-icons';
import {
    faEnvelope,
    faEnvelopeOpen,
    faMapMarkedAlt,
    faMapMarkerAlt,
    faMobileAlt
} from "@fortawesome/free-solid-svg-icons";
import {faTelegram, faViber} from "@fortawesome/free-brands-svg-icons";


export const Contact = (props) => {

    return (
        <p>
            <FontAwesomeIcon
                icon={props.elem}
                fixedWidth
            />
            <a href={props.link} target="_blank">{props.name}</a>
            {props.info}
        </p>
    )
}




