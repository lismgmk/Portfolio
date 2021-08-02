import {Header} from "./Header/Header";
import style from "./App.module.css"
import {Main} from "./Main/Main";
import {Skils} from "./Skills/Skils";
import {Progects} from "./Progects/Progects";
import {OutdorWork} from "./OutdorWork/OutdorWork";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";
import * as React from "react";


function App() {
    const linkMainRef =  React.useRef();
    const linkSkilsRef = React.useRef();
    const linkProgectsRef = React.useRef();
    const linkContactsRef = React.useRef();
    return (
        <div >
            <Header
                linkMain={linkMainRef}
                linkSkils={linkSkilsRef}
                linkProgects={linkProgectsRef}
                linkContacts={linkContactsRef}
            />
            <Main ref={linkMainRef}/>
            <Skils ref={linkSkilsRef} />
            <Progects ref={linkProgectsRef}/>
            <OutdorWork/>
            <Contacts ref={linkContactsRef}/>
            <Footer/>
        </div>
    )
}

export default App
