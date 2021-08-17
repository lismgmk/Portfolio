import style from "./Progects.module.scss";
import elseStyle from '../Styles/Styles.module.scss';
import {Progect} from "./Progect";
import {TitleH2} from "../Components/Title/TitleH2";
import socialImage from "../assets/images/socialNetwork.jpg";
import toDoListImage from "../assets/images/todoList.jpg";
import customItem from "../assets/images/customItems.jpg";
import pokraskino from "../assets/images/pokraskino.jpg";
import portfolio from "../assets/images/portfolio.jpg";
import * as React from "react";
import slide1 from "../assets/images/slide1me.jpg";
import slide2 from "../assets/images/slide2progects.jpg";
import slide3 from "../assets/images/slide3skils.png";


export const Progects = (props) => {

    const funcActions = {
        SocialNetwork: [
            'Log in and log out',
            'Download from server and see your profile',
            'Change the status of your profile',
            'Write a private message',
            'Download from the server and see the profiles of other users',
            'Subscribing and unsubscribing to a user'
        ],
        toDoList: [
            'creating new todolists with nested tasks',
            'create-read-update-delete operations with tudulists and tasks, sending to the server',
            'login logout, handling errors sending requests',
        ],
        portfolio: [
            'Use the site on a mobile phone. Adaptive layout',
            'Use site navigation',
            'Use links and buttons',
            'Use the feedback form. in the process...',
        ],
        customComponents: [
            'creation of custom inputs, selectors, buttons',
            'sorting the list',
            'work with object Date and other',
        ],
        pokraskino: [
            'A valid selling landing page. Created on the WordPress constructor using Elementor. Configured targeting advertising in Google and Yandex accounts. Not a bad CEO. Promotion in social networks: VK (1500 subscribers), Instagram (812 subscribers)',
        ],

    }


    const projectsInfo = [
        {
            style: {backgroundImage: `url(${socialImage})`},
            name: "Social Network",
            href2project: 'https://lismgmk.github.io/Social-Network/',
            href2code: 'https://github.com/lismgmk/Social-Network',
            usedLibraries: 'REACT, REDUX, TYPESCRIPT, AXIOS, MATERIAL UI, REDUX-FORM, react-router, redux-thunk, reselect',
            func: funcActions.SocialNetwork,
            buttonNameProject: 'see progect*',
            buttonNameCode: 'see code',
        },
        {
            style: {backgroundImage: `url(${toDoListImage})`},
            name: "Todo list",
            href2project: 'https://lismgmk.github.io/ToDoList',
            href2code: 'https://github.com/lismgmk/ToDoList',
            usedLibraries: 'REACT, Redux Toolkit, TYPESCRIPT, AXIOS, MATERIAL UI, formik, react-router, redux-thunk, immer, uuid',
            func: funcActions.toDoList,
            buttonNameProject: 'see progect*',
            buttonNameCode: 'see code',
        },
        {
            style: {backgroundImage: `url(${portfolio})`},
            name: "Portfolio",
            href2project: 'https://lismgmk.github.io/Portfolio/',
            href2code: 'https://github.com/lismgmk/Portfolio',
            usedLibraries: 'REACT, SASS, MATERIAL UI, react-router',
            func: funcActions.portfolio,
            buttonNameProject: 'see progect*',
            buttonNameCode: 'see code',
        },

        {
            style: {backgroundImage: `url(${customItem})`},
            name: "Custom elements",
            href2project: 'https://lismgmk.github.io/ignat/',
            href2code: 'https://github.com/lismgmk/ignat',
            usedLibraries: 'REACT, Redux, TYPESCRIPT, AXIOS, MATERIAL UI, react-router',
            func: funcActions.customComponents,
            buttonNameProject: 'see progect*',
            buttonNameCode: 'see code',
        },

        {
            style: {backgroundImage: `url(${pokraskino})`},
            name: "Landing page for business",
            href2project: 'https://pokraskino.by/',
            href2code: 'https://pokraskino.by/',
            usedLibraries: 'WORDPRESS, HTML, CSS, GOOGLE ADS, YANDEX DIRECT, VK, INSTAGRAM',
            func: funcActions.pokraskino,
            buttonNameProject: 'see progect*',
            buttonNameCode: 'see code',
        },


    ]


    return (
        <div id='progects' className={elseStyle.rawBox}>
            <div className={`${style.progects} ${elseStyle.container}`}>
                <TitleH2 text={'My projects'}/>
                <>
                    <div className={style.progectsBlock}>
                        {projectsInfo.map(i => {
                            return <Progect
                                style={i.style}
                                name={i.name}
                                href2project={i.href2project}
                                href2code={i.href2code}
                                usedLibraries={i.usedLibraries}
                                func={i.func}
                                buttonNameProject={i.buttonNameProject}
                                buttonNameCode={i.buttonNameCode}
                            />
                        })}
                    </div>
                </>
            </div>
        </div>
    )
}


