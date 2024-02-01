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
            <section style={{display: "flex", justifyContent: "center", width: "93vw", margin: 'auto'}}>
                <Description/>
            </section>
            <section>
                <div className="time-choosing">
                    <div className="question">
                        <label style={{fontSize: "25px"}}>How long would like to type?</label>
                        <div className="buttons">
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
                            <button
                                className="time-shortcut"
                                value={90}
                                onClick={() => checkInput(120)}
                            >
                                120
                            </button>
                        </div>
                    </div>
                    <input
                        type="number"
                        value={(timeChosen < 1) ? '' : timeChosen}
                        onChange={(e) => {
                            const rawValue = e.target.value;

                            if (/^\d*$/.test(rawValue) || rawValue === '') {
                                const newValue = rawValue === '' ? 0 : Math.min(Number(rawValue), 999);
                                checkInput(newValue);
                            }
                        }}
                        className="time-input"
                        max={999}
                    />
                </div>
                <InputCheck
                    option={timeChosen}
                />
            </section>
        </div>
    )
}

export default App
