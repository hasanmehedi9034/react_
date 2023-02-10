import React from "react";

export default class ClickCounter extends React.Component {
    render() {
        const {counter, incrementCount} = this.props;
        
        return(
            <>
                <button onClick={incrementCount}>
                    Hovered {counter} times
                </button>
            </>
        )
    }
}