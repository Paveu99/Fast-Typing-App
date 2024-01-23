import React, {JSX, useState} from "react";

export const InputField = () => {

    const [writtenText, setWrittenText] = useState<string>('')
    const textInput:string = 'HEJKA CO TAM U WAS';

    function checkLetter(e:string) {
        setWrittenText(e)
    }

    const highlightedLetters = (textInput: string, writtenText: string): React.JSX.Element[] => {
        const result: JSX.Element[] = [];

        for (let i = 0; i < writtenText.length; i++) {
            const originalLetter = textInput[i];
            const typedLetter = writtenText[i];

            const isCorrect = originalLetter === typedLetter;

            result.push(<span key={i} style={{ color: isCorrect ? 'green' : 'red', backgroundColor: isCorrect ? 'lightgreen' : 'lightpink'}}>{originalLetter}</span>);

        }
        result.push((writtenText.length === 0) ? <span>{textInput}</span> : <span>{textInput.slice(writtenText.length)}</span>)

        return result
    }

    return <>
        {highlightedLetters(textInput, writtenText)}
        <input type="text" value={writtenText} onChange={e => checkLetter(e.target.value)}/>
    </>
};
