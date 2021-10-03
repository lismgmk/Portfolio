import style from "./Progects.module.scss";
import elseStyle from '../Styles/Styles.module.scss';
import {Progect} from "./Progect";
import {TitleH2} from "../Components/Title/TitleH2";
import socialImage from "../assets/images/socialNetwork.jpg";
import toDoListImage from "../assets/images/todoList.jpg";
import customItem from "../assets/images/customItems.jpg";
import pokraskino from "../assets/images/pokraskino.jpg";
import portfolio from "../assets/images/portfolio.jpg";
import exchange from "../assets/images/exchange.jpg";
import * as React from "react";
import slide1 from "../assets/images/slide1me.jpg";
import slide2 from "../assets/images/slide2progects.jpg";
import slide3 from "../assets/images/slide3skils.png";


export const Progects = (props) => {

    const funcActions = {
        CryptocurrencyRates: [
            'done in 4 days',
            'download from server and see coins',
            'course charts',
            'personal wallet',
            'delta counting in wallet',
            'pagination',
        ],
        toDoList: [
            'creating new todolists with nested tasks',
            'create-read-update-delete operations with tudulists and tasks, sending to the server',
            'login logout, handling errors sending requests',
        ],
        exchange: [
            'getting a list of currencies',
            'sorting, deleting, adding new currencies, copying currency data to the clipboard',
            'validation of successful and incorrect actions',
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
            name: "Cryptocurrency Rates",
            href2project: 'https://lismgmk.github.io/crypto',
            href2code: 'https://github.com/lismgmk/crypto',
            usedLibraries: 'REACT, REDUX, TYPESCRIPT, AXIOS, react-router',
            func: funcActions.CryptocurrencyRates,
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
            style: {backgroundImage: `url(${exchange})`},
            name: " Exchange rates",
            href2project: 'https://lismgmk.github.io/ChangeCurrencu/',
            href2code: 'https://github.com/lismgmk/ChangeCurrencu',
            usedLibraries: 'REACT, REDUX, TYPESCRIPT, AXIOS, MATERIAL UI, react-router,',
            func: funcActions.exchange,
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


