import React from "react";

export default class Form extends React.Component {
    state = {
        title: 'JavaScript'
    }

    handleChange = (e) => {        
        this.setState({
            title: e.target.value
        });
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Enter Title" value={this.state.title} onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}






