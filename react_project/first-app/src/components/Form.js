import React from "react";

export default class Form extends React.Component {
    state = {
        title: 'JavaScript',
        text: 'JS is awesome',
        library: 'react',
        isAwesome: false
    }

    handleChange = (e) => {  
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value
            });
        } 
        else if(e.target.type === 'textarea') {
            this.setState({
                text: e.target.value
            });
        }     
        else if(e.target.type === 'select-one') {
            this.setState({
                library: e.target.value
            });
        }     
        else if(e.target.type === 'checkbox') {
            this.setState({
                isAwesome: e.target.checked
            })
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input 
                        type="text"
                        placeholder="Enter Title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />

                    <textarea name='text'
                        value={this.state.text}
                        onChange={this.handleChange}
                    >
                    </textarea>
                    <br />
                    <br />

                    <select
                        value={this.state.library}
                        onChange={this.handleChange}
                    >
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                    </select>
                    <br />
                    <br />

                    <input type="checkbox"
                        checked={this.state.isAwesome}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <br/>

                    <input type='submit' value="submit" />
                </form>
            </div>
        )
    }
}






