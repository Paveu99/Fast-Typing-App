import './App.css'
import {AppName} from "./components/appName/AppName.tsx";
import {Description} from "./components/description/Description.tsx";
import {InputCheck} from "./components/inputCheck/InputCheck.tsx";
import {useState} from "react";

function App() {

    const [timeChosen, setTimeChosen] = useState<number>(0);

    function checkInput(e: number) {
        setTimeChosen(e)
    }

    return (
        <div className="main-content">
            <header>
                <AppName/>
            </header>
            <section>
                <Description/>
            </section>
            <section>
                <label>How long would like to type?</label>
                <input
                    type="number"
                    value={timeChosen}
                    onChange={e => checkInput(Number(e.target.value))}
                    min={20}
                />
                <InputCheck option={timeChosen}/>
            </section>
        </div>
    )
}

export default App
