import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skils} from "./Skills/Skils";
import {Progects} from "./Progects/Progects";
import {OutdorWork} from "./OutdorWork/OutdorWork";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";
import * as React from "react";
import SliderMain from "./Components/Slider/SliderMain";
import {BurgerMenu} from "./BurgerMenu/BurgerMenu";


function App() {

    return (
        <>
            <SliderMain/>
            <Header/>
            <BurgerMenu/>
            <Main/>
            <Skils/>
            <Progects/>
            <OutdorWork/>
            <Contacts/>
            <Footer/>
        </>
    )
}

export default App
