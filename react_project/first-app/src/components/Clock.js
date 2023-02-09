import React from "react"

class Clock extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         date: new Date()
    //     };
    // }

    state = {
        date: new Date,
        locale: 'bn-BD'
    };

    tick() {        
        this.setState((state, props) => ({
            date: new Date(),
        }))
    }

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    // handleClick = () => {
    //     this.setState({
    //         locale: 'en-US'
    //     });
    // }

    handleClick() {
        this.setState({
            locale: 'en-US'
        })
    }

    render() {
        const {date, locale} = this.state;

        return (
            <>
                <h1 className="heading">
                    <span className="text">{this.state.date.toLocaleTimeString(locale)}</span>
                </h1>
                <button type="button" onClick={this.handleClick.bind(this)}>Click Here</button>
            </>
        )
    }
}

export default Clock;