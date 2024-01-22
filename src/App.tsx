import './App.css'
import {Clock} from "./components/clock/Clock.tsx";
import {InputField} from "./components/inputField/InputField.tsx";

function App() {

    const word = []
    word.push(<span style={{color: 'red'}}>H</span>)
    word.push(<span style={{color: 'yellow'}}>H</span>)
    word.push(<span style={{color: 'red'}}>H</span>)
    word.join('')

    return (
        <>
            <Clock option={120}/>
            <InputField />
            {word}
        </>
    )
}

export default App
