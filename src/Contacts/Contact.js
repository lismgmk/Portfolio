import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


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




