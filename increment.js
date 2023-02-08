const domContainer = document.querySelector('#root');

// const myElement = React.createElement(
//     'div', 
//     null,
//     React.createElement('p', null, 'Hello Mehedi'));

// const myElement = React.createElement(
//     'div', 
//     null,
//     [
//         React.createElement('p', null, 'Hello Mehedi 1'),
//         React.createElement('p', null, 'Hello Mehedi 2')
//     ]
// )

const Increment = () => {
    const [counter, setCounter] = React.useState(0);

    return (
        <div>
            <h1 id="display">{ counter }</h1>
            <div>
                <button id="button" onClick={() => setCounter(counter + 1)}>Increment</button>
            </div>
        </div>
    )
}


// ReactDOM.render(Increment(), domContainer);
// ReactDOM.render( <Increment />, domContainer);
ReactDOM.render(
    <div class="container">
        <Increment />
        <Increment />
        <Increment />
        <Increment />
    </div>,
    domContainer
);



// const display = document.querySelector('#display');
// const button = document.querySelector('#button');

// let count = parseInt(display.textContent);

// button.addEventListener('click', () => {
//     count++;
//     display.textContent = count;
// })

// batch update
//
    // virtual DOM
    // 





