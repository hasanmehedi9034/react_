import React from "react";
import WithCounter from "./HOC/WithCounter";

const HoverCounter = ({count, incrementCount}) => {
    return(
        <div>
            <p onMouseOver={incrementCount}>Mouse Over {count} times</p>
        </div>
    )
}


export default WithCounter(HoverCounter);