import '../styles/ResultsView.css'

interface Props {
    textLength: number,
    correctLetters: number,
    percentage: string,
    setTime: number,
    timePassed: number,
    writtenLetters: number,
}

export const ResultsView = (props: Props) => {

    return <div className="result-view">
        <h1 className="results-title">
            Typing results:
        </h1>
        <hr style={{width: '90%'}}/>
        <div className="statistics">
            <div className="stat">
                <p>Correct letters:</p>
                <div className="single-stat">
                    {props.correctLetters}/{props.writtenLetters}
                </div>
            </div>
            <div className="stat">
                <p>
                    Correctness
                </p>
                <div className="single-stat">
                    {props.percentage}%
                </div>
            </div>
            <div className="stat">
                <p>
                    Speed:
                </p>
                <div className="single-stat">
                    {(props.writtenLetters/props.timePassed).toFixed(2)} letters/s
                </div>
            </div>
            <div className="stat">
                <p>
                    Written letters:
                </p>
                <div className="single-stat">
                    {props.writtenLetters}/{props.textLength}
                </div>
            </div>
        </div>
    </div>
}