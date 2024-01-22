import React, {JSX, useEffect, useState} from "react";

export const InputField = () => {

    const [writtenText, setWrittenText] = useState<string>('')
    const textInput:string = 'HEJKA CO TAM U WAS';
    const [correctCount, setCorrectCount] = useState<number>(0);

    function checkLetter(e:string) {
        setWrittenText(e)
        const count = e.split('').filter((char, index) => char === textInput[index]).length;
        setCorrectCount(count);
    }

    const highlightedLetters = (textInput: string, writtenText: string): React.JSX.Element[] => {
        const result: JSX.Element[] = [];

        for (let i = 0; i < writtenText.length; i++) {
            const originalLetter = textInput[i];
            const typedLetter = writtenText[i];

            const isCorrect = originalLetter === typedLetter;

            result.push(<span key={i} style={{ color: isCorrect ? 'green' : 'red' }}>{originalLetter}</span>);

        }
        result.push((writtenText.length === 0) ? <span>{textInput}</span> : <span>{textInput.slice(writtenText.length)}</span>)

        return result
    }

    useEffect(() => {
        console.log('Aktualna wartość correctCount:', correctCount);
        console.log('Proce:', correctCount);
    }, [correctCount]);

    return <>
        {highlightedLetters(textInput, writtenText)}
        <input type="text" value={writtenText} onChange={e => checkLetter(e.target.value)}/>
    </>
};
