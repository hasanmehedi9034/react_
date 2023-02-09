import React from "react"
import Button from "./Button";

class Clock extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         date: new Date,
    //         locale: 'bn-BD'
    //     };
    //     this.handleClick = this.handleClick.bind(this);
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

    handleClick = (locale) => {
        this.setState({
            locale
        });
    }

    // handleClick() {
    //     this.setState({
    //         locale: 'en-US'
    //     })
    // }

    render() {
        const {date, locale} = this.state;

        // let button;
        // if (locale === 'bn-BD') {
        //    button = (<Button change={this.handleClick} locale='en-US' />);
        // }
        // else {
        //     button = (<Button change={this.handleClick} locale='bn-BD' />);
        // }
        

        return (
            <>
                <h1 className="heading">
                    <span className="text">{this.state.date.toLocaleTimeString(locale)}</span>
                    {/* <Button change={this.handleClick.bind(this, 'en-US')}></Button> */}
                    {/* <Button change={() => this.handleClick('en-US')}></Button> */}

                    {
                        locale === 'bn-BD' 
                        ? <Button change={this.handleClick} locale='en-US' show={false} enable />
                        : <Button change={this.handleClick} locale='bn-BD' show enable />
                    }
                </h1>
                
            </>
        )
    }
}

export default Clock;