import React from "react"

class Clock extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         date: new Date()
    //     };
    // }

    state = { date: new Date };

    tick() {
        // this.setState({
        //     date: new Date()
        // })
        
        this.setState((state, props) => ({
            date: new Date()
        }))
    }

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    render() {
        return (
            <h1 className="heading">
                <span className="text">{this.state.date.toLocaleTimeString(this.props.local)}</span>
            </h1>
        )
    }
}

export default Clock;