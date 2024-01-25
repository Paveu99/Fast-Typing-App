import React, {JSX, useEffect, useRef, useState} from "react";
interface Props {
    option: number
}

interface Texts {
    title: string;
    text: string;
}

export const InputCheck = (props: Props) => {

    const [text, setText] = useState<Texts>({
        title: 'Draw text first',
        text: ''
    });
    const [writtenText, setWrittenText] = useState<string>('');
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [elapsedTime, setElapsedTime] = useState<number>(props.option * 1000);
    const intervalIdRef = useRef<null | any>(null);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const texts: Texts[] = [
        {
            title: "Sustainable Agriculture Practices for a Greener Tomorrow",
            text: "As a senior developer with a penchant for exploring diverse fields, let's delve into sustainable " +
                "agriculture practices. Embracing environmentally friendly techniques, such as precision farming and " +
                "organic cultivation, can enhance crop yields while minimizing ecological impact. Stay ahead of the curve " +
                "by integrating technology into agriculture, promoting a harmonious balance between food production and " +
                "ecological preservation."
        },
        {
            title: "Unlocking the Mysteries of Deep Sea Exploration",
            text: "Step away from the keyboard and immerse yourself in the wonders of deep-sea exploration. Delve into " +
                "the latest advancements in marine technology, from autonomous underwater vehicles to remotely operated" +
                " vehicles, uncovering the secrets of the ocean's depths. Explore the potential for discovering new " +
                "species and understanding the impact of oceanic ecosystems on the planet."
        },
        {
            title: "The Art and Science of Coffee Brewing",
            text: " Beyond the lines of code, indulge in the art and science of coffee brewing. From understanding bean " +
                "varieties to mastering brewing techniques, explore the world of coffee connoisseurship. Dive into the " +
                "cultural significance of coffee globally, discovering how different regions contribute to the rich " +
                "tapestry of coffee flavors."
        },
        {
            title: "Urban Gardening: Growing Green Spaces in Concrete Jungles",
            text: "Transition from virtual landscapes to urban green spaces by exploring the concept of urban gardening. " +
                "Learn how city dwellers are transforming balconies, rooftops, and small patches of land into flourishing " +
                "gardens. Discover the benefits of urban gardening, from fostering community engagement to promoting " +
                "biodiversity in metropolitan areas."
        },
        {
            title: "The Renaissance of Analog: Vinyl Records and Turntables",
            text: "Take a break from digital realms and appreciate the resurgence of analog in the form of vinyl records. " +
                "Delve into the nostalgic appeal of turntables, exploring the craftsmanship behind vinyl production and " +
                "the unique auditory experience it offers. Uncover the vinyl revival's impact on music appreciation and " +
                "collector culture."
        },
        {
            title: "From Seed to Cup: The Journey of Specialty Tea",
            text: "Shift your focus from coding to the intricate world of specialty tea. Trace the journey of tea leaves " +
                "from cultivation to brewing, exploring the nuances of different tea varieties. Dive into the cultural " +
                "significance of tea ceremonies and the growing global interest in specialty teas, ranging from matcha to oolong."
        },
        {
            title: "The Fascinating World of Urban Exploration",
            text: "Step into the world of urban exploration, where abandoned buildings and forgotten spaces become canvases" +
                " for discovery. Explore the history and stories behind these forgotten places, from industrial remnants to" +
                " decaying mansions. Understand the motivations of urban explorers and the challenges they face in preserving" +
                " the past."
        },
        {
            title: "Beyond the Brush: Exploring Digital Art Forms",
            text: "Shift your perspective from traditional art to the digital realm by exploring various forms of digital art." +
                " From generative art to virtual reality installations, discover how technology is reshaping artistic expression." +
                " Explore the intersection of code and creativity in the digital art landscape."
        },
        {
            title: "The Science of Sleep: Unraveling the Mysteries of Dreams",
            text: "Take a break from the fast-paced tech world and delve into the science of sleep. Explore the physiological" +
                " and psychological aspects of sleep cycles, dreaming, and the impact of quality sleep on overall well-being." +
                " Uncover the mysteries of the mind during the nocturnal journey through dreams."
        },
        {
            title: "Cultural Crossroads: The Art of Fusion Cuisine",
            text: "As a senior developer with a taste for exploration, venture into the realm of fusion cuisine. " +
                "Explore how culinary traditions from different cultures blend harmoniously to create unique and " +
                "tantalizing dishes. From sushi burritos to kimchi tacos, discover the innovative culinary creations " +
                "that reflect the diversity of global flavors."
        },
    ]

    const randomize = () => {
        setText(texts[Math.floor(Math.random() * texts.length)])
        setWrittenText('');
        setElapsedTime(props.option * 1000);
        setIsRunning(false);
    }

    function checkLetter(e:string) {
        if(e.length === text.text.length) {
            setIsRunning(false);
        }
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

    function handleChange() {
        setIsRunning((prev) => !prev);
    }

    function reset() {
        setWrittenText('');
        setElapsedTime(props.option * 1000);
        setIsRunning(false);
    }

    function formatTime(){

        let minutes: number | string = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds: number | string = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds: number | string = Math.floor((elapsedTime % 1000) / 10);

        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`;
    }

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
            textareaRef.current?.focus();
        }

        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [isRunning]);

    return(<>
            <div>
                <button onClick={() => randomize()}>
                    Randomize
                </button>
            </div>
            <div className="stopwatch">
                <div className="display">{formatTime()}</div>
                <div className="controls">
                    <button onClick={handleChange} type="button" className="stop-button">{isRunning ? 'Stop' : 'Start'}</button>
                    <button onClick={reset} className="reset-button">Reset</button>
                </div>
            </div>
            <div>
                <div>
                    {highlightedLetters(text?.text as string, writtenText)}
                </div>
                <textarea
                    ref={textareaRef}
                    value={writtenText}
                    onChange={e => checkLetter(e.target.value)}
                    readOnly={text.text.length === writtenText.length || text.text.length === 0}
                />
            </div>
        </>
    );

}