import './App.css'
import {Clock} from "./components/clock/Clock.tsx";
import {InputField} from "./components/inputField/InputField.tsx";
import {AppName} from "./components/appName/AppName.tsx";
import {Description} from "./components/description/Description.tsx";

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
                <Clock option={120}/>
                <InputField />
            </section>
        </div>
    )
}

export default App
