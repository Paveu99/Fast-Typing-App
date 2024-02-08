import '../styles/CountdownView.css'
import {useEffect, useState} from "react";
import el1 from '../styles/images/Wait.png';
import el2 from '../styles/images/Go.png';
interface Props {
    time: string
}

export const CountdownView = (props: Props) => {

    const [lights, setLights] = useState<JSX.Element | null>(null);

    const go = <span>
        GO!!!
    </span>

    useEffect(() => {
        switch (props.time) {
            case '5':
                setLights(
                    <div className="lights">
                        <img src={el1} alt="" className="wait-light"/>
                        <img src={el1} alt="" className="wait-light"/>
                        <img src={el1} alt="" className="wait-light"/>
                        <img src={el1} alt="" className="wait-light"/>
                        <img src={el1} alt="" className="wait-light"/>
                    </div>
                );
                break;
            case '4':
                setLights(
                    <div className="lights">
                        <img src={el2} alt="" className="go-light"/>
                        <img src={el1} alt="" className="wait-light"/>
                        <img src={el1} alt="" className="wait-light"/>
                        <img src={el1} alt="" className="wait-light"/>
                        <img src={el1} alt="" className="wait-light"/>
                    </div>
                );
                break;
            case '3':
                setLights(
                    <div className="lights">
                        <img src={el2} alt="" className="go-light"/>
                        <img src={el2} alt="" className="go-light"/>
                        <img src={el1} alt="" className="wait-light"/>
                        <img src={el1} alt="" className="wait-light"/>
                        <img src={el1} alt="" className="wait-light"/>
                    </div>
                );
                break;
            case '2':
                setLights(
                    <div className="lights">
                        <img src={el2} alt="" className="go-light"/>
                        <img src={el2} alt="" className="go-light"/>
                        <img src={el2} alt="" className="go-light"/>
                        <img src={el1} alt="" className="wait-light"/>
                        <img src={el1} alt="" className="wait-light"/>
                    </div>
                );
                break;
            case '1':
                setLights(
                    <div className="lights">
                        <img src={el2} alt="" className="go-light"/>
                        <img src={el2} alt="" className="go-light"/>
                        <img src={el2} alt="" className="go-light"/>
                        <img src={el2} alt="" className="go-light"/>
                        <img src={el1} alt="" className="wait-light"/>
                    </div>
                );
                break;
            case '0':
                setLights(
                    <div className="lights">
                        <img src={el2} alt="" className="go-light"/>
                        <img src={el2} alt="" className="go-light"/>
                        <img src={el2} alt="" className="go-light"/>
                        <img src={el2} alt="" className="go-light"/>
                        <img src={el2} alt="" className="go-light"/>
                    </div>
                );
                break;
            default:
                setLights(null);
                break;
        }
    }, [props.time]);

    return <div className="countdown-view">
        {lights}
        <div>{Number(props.time) > 0 ? props.time : go}</div>
    </div>
}