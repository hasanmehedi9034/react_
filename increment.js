const domContainer = document.querySelector('#root');

// const myElement = React.createElement(
//     'div', 
//     null,
//     React.createElement('p', null, 'Hello Mehedi'));

const myElement = React.createElement(
    'div', 
    null,
    [
        React.createElement('p', null, 'Hello Mehedi 1'),
        React.createElement('p', null, 'Hello Mehedi 2')
    ]
)

ReactDOM.render(myElement, domContainer);




