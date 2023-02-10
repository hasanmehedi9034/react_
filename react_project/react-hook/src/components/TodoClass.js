import React from 'react';

class TodoClass extends React.Component {
    state = {
        todo: '',
        warning: null
    }

    handleInput = (e) => {
        const inputValue = e.target.value;

        const warning = inputValue.includes('.js')
            ? 'You nedd JavaScript skill to complete the task. Do you have it?'
            : null;

        this.setState({
            todo: inputValue,
            warning
        })
    }

    render() {
        const {todo, warning} = this.state;
        return (
            <>
                <p>{todo}</p>
                <p>
                    <textarea name="todo" value={todo} onChange={this.handleInput}>
                        
                    </textarea>
                </p>
                {
                    warning 
                    ? <h1>{warning}</h1>
                    : <h1>Good Choice</h1>
                }
            </>
        )
    }
}

export default TodoClass;

