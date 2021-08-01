import {Header} from "./Header/Header";
import style from "./App.module.css"
import {Main} from "./Main/Main";
import {Skils} from "./Skills/Skils";
import {Progects} from "./Progects/Progects";
import {OutdorWork} from "./OutdorWork/OutdorWork";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";

function App() {

    return (
        <div >
            <Header/>
            <Main/>
            <Skils/>
            <Progects/>
            <OutdorWork/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default App
