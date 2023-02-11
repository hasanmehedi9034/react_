import { useEffect, useRef } from "react"
import Input from "./Input";
import Time from "./Time";

export default function Form() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return(
        <p>
            <Input ref={inputRef}/>
        </p>
    )
}


