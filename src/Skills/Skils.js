import style from "./Skils.module.scss";
import elseStyle from '../Styles/Styles.module.scss';
import {Skil} from "./Skil";
import {TitleH2} from "../Components/Title/TitleH2";
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faBattleNet} from '@fortawesome/free-brands-svg-icons';
import {faHtml5} from '@fortawesome/free-brands-svg-icons';
import {faCss3} from '@fortawesome/free-brands-svg-icons';
import {faDashcube} from '@fortawesome/free-brands-svg-icons';
import {faJs} from '@fortawesome/free-brands-svg-icons';
import {faAsymmetrik} from '@fortawesome/free-brands-svg-icons';
import {faGit} from '@fortawesome/free-brands-svg-icons';
import {faWpforms} from '@fortawesome/free-brands-svg-icons';
import {faListAlt} from '@fortawesome/free-solid-svg-icons';
import {faChalkboard} from '@fortawesome/free-solid-svg-icons';
import {faFillDrip} from '@fortawesome/free-solid-svg-icons';
import * as React from "react";



export const Skils = (props)=> {

    const mySkils = [
        {skil: 'React', img: faReact, text: 'A JavaScript library for building user interfaces.'},
        {skil: 'Redux', img: faBattleNet, text: 'A Predictable State Container for JS Apps.'},
        {skil: 'JavaScript', img: faJs, text: 'JS is a programming language that adds interactivity to your website.'},
        {skil: 'TypeScript', img: faDashcube, text: 'TS extends JS by adding types.'},
        {skil: 'HTML', img: faHtml5, text: 'HTML is a standardized document markup language for viewing web pages in a browser.'},
        {skil: 'CSS', img: faCss3, text: 'CSS is a formal language for describing the appearance of a document written using a markup language.'},
        {skil: 'Axios', img: faAsymmetrik, text: 'Axios is a promise based HTTP client for the browser and Node.js.'},
        {skil: 'Unit Test', img: faListAlt, text: 'Unit test is to feed something to the input of the unit and check the result at the output'},
        {skil: 'Storybook', img: faChalkboard, text: 'Storybook is an open source tool for developing UI components.'},
        {skil: 'Material UI', img: faFillDrip, text: 'Material UI is a library that allows you to create Google Material Design apps using React components.'},
        {skil: 'Formik', img: faWpforms, text: 'Formik is a library that helps you work with forms. It makes it easy to retrieve data from a form, validate data, display error messages, and more.'},
        {skil: 'GIT', img: faGit, text: 'Git is a distributed version control system that allows developers to track changes in files and work on the same project together with colleagues.'},
    ]

    return (
        <div  id='skils' className={elseStyle.rawBox}>
            <div className={`${style.skils} ${elseStyle.container}`}>
                <TitleH2 text={'Skils'}/>
                <div className={style.skilsBlock}>
                    {mySkils.map(i=>{
                        return <Skil img={i.img} skil={i.skil} text={i.text}/>
                    })}
                </div>
            </div>
        </div>
    );
}


