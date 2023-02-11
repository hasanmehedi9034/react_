import React from "react";

class MyComponentClass extends React.Component {
    state = {
        count: 0,
        date: new Date()
    }

    addClick = () => {
        this.setState(({count}) => ({
            count: count + 1
        }))
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`;
        setInterval(this.tick, 1000);
    }

    componentDidUpdate() {
        document.title = `Updated ${this.state.count} times`;
    }

    tick = () => {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return(
            <>
                <p>Time: {this.state.date.toTimeString()} </p>
                <p>
                    <button onClick={this.addClick} type="button">click</button>
                </p>
            </>
        )
    }
}


export default MyComponentClass;
