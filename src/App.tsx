import './App.css'
import {AppName} from "./components/appName/AppName.tsx";
import {Description} from "./components/description/Description.tsx";
import {InputCheck} from "./components/inputCheck/InputCheck.tsx";

function App() {

    return (
        <div className="main-content">
            <header>
                <AppName/>
            </header>
            <section>
                <Description/>
            </section>
            <section>
                <InputCheck option={120}/>
            </section>
        </div>
    )
}

export default App
