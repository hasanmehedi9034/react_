import React, { Children } from "react";

export default class Counter extends React.Component {
    state = {
        count: 0
    }

    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    render () {
        const { children }= this.props;
        return (
            children(this.state.count, this.incrementCount)
        )
    }
}






