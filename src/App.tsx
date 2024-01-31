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
            <section style={{display: "flex", justifyContent: "center"}}>
                <Description/>
            </section>
            <section>
                <div className="time-choosing">
                    <label style={{fontSize: "25px"}}>How long would like to type?</label>
                    <input
                        type="number"
                        value={timeChosen}
                        onChange={e => checkInput(Number(e.target.value))}
                        min={20}
                        className="time-input"
                    />
                    <button
                        className="time-shortcut"
                        onClick={() => checkInput(30)}
                    >
                        30
                    </button>
                    <button
                        className="time-shortcut"
                        onClick={() => checkInput(60)}
                    >
                        60
                    </button>
                    <button
                        className="time-shortcut"
                        value={90}
                        onClick={() => checkInput(90)}
                    >
                        90
                    </button>
                </div>
                <InputCheck option={timeChosen}/>
            </section>
        </div>
    )
}

export default App
