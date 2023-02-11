import { useEffect, useState } from "react"

export default function MyComponent() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    // const [text, setText] = useState('');

    const addClick = () => {
        setCount((count) => count + 1);
    }

    const tick = () => {
        setDate(new Date());
    }

    useEffect(() => {
        document.title = `Clicked ${count} times`;
        console.log('updating document title')
    }, [count]);

    useEffect(() => {
        const setTime = setInterval(tick, 1000);
        console.log('start time');

        return () => {
            clearInterval(setTime);
        }
    }, []);

    return(
        <>
            <p>Time: {date.toLocaleTimeString()} </p>
            {/* <div>
                <input
                    type='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div> */}
            <p>
                <button onClick={addClick} type="button">click</button>
            </p>
        </>
    )
}

