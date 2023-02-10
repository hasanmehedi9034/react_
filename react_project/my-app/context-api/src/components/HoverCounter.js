import React from "react";

export default class HoverCounter extends React.Component {
    render() {
        const {counter, incrementCount, theme} = this.props;

        const style = theme 
            ? {
                backgroundColor: theme,
                color: '#fff'
            }
            : null;
        
        return(
            <>
                <h1 style={style} onMouseOver={incrementCount}>
                    Hovered {counter} times
                </h1>
            </>
        )
    }
}