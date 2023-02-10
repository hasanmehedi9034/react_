import React from "react";
import WithCounter from "./HOC/WithCounter";

const ClickCounter = ({count, incrementCount}) => {
    return(
        <div>
            <button onClick={incrementCount}>Click {count} times</button>
        </div>
    )
}


export default WithCounter(ClickCounter);