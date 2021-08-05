import style from './Header.module.scss'
import elseStyle from '../Styles/Styles.module.scss'
import {NavLinc} from "./NavLinc";
import {Box} from "@material-ui/core";
import {BurgerMenu} from "../BurgerMenu/BurgerMenu";
import * as React from "react";

export function Header(props) {
    return (

        <div className={`${style.headerWrapper} ${elseStyle.rawBox}`}>

            <Box  display={{xs: 'none', sm: 'block'}}>
                <div className={`${style.header} `}>
                    <NavLinc name={'main'} linc={props.linkMain}/>
                    <NavLinc name={'skils'} linc={props.linkSkils}/>
                    <NavLinc name={'progects'} linc={props.linkProgects}/>
                    <NavLinc name={'contacts'} linc={props.linkContacts}/>
                </div>

            </Box>

        </div>


    );
}

