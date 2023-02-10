import { useState } from "react";

function Todo() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js')
            ? 'You nedd JavaScript skill to complete the task. Do you have it?'
            : null;

        setTodo(inputValue);
        setWarning(warning);
    }

    return (
        <>
            <p>{todo}</p>
            <p>
                <textarea name="todo" value={todo} onChange={handleInput}>
                </textarea>
            </p>
            <h3>{warning || 'Good Choice'}</h3>
        </>
    )
}

export default Todo;
