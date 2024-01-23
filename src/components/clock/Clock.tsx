import {useEffect, useRef, useState} from "react";

interface Props {
    option: number
}

export const Clock = (props: Props) => {

    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [elapsedTime, setElapsedTime] = useState<number>(props.option * 1000);
    const intervalIdRef = useRef<null | any>(null);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime((prevElapsedTime) => {
                    const newElapsedTime = prevElapsedTime - 10;
                    if (newElapsedTime <= 0) {
                        clearInterval(intervalIdRef.current);
                        setIsRunning(false);
                        return 0;
                    }
                    return newElapsedTime;
                });
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [isRunning]);

    function handleChange() {
        setIsRunning((prev) => !prev);
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
            reset();
        }
    };

    function reset() {
        setElapsedTime(props.option * 1000);
        setIsRunning(false);
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    function formatTime(){

        let minutes: number | string = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds: number | string = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds: number | string = Math.floor((elapsedTime % 1000) / 10);

        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return(
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={handleChange} className="stop-button">{isRunning ? 'Stop' : 'Start'}</button>
                <button onClick={reset} className="reset-button">Reset</button>
            </div>
        </div>
    );
}