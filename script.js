const display = document.querySelector('#display');
const button = document.querySelector('#button');

let count = parseInt(display.textContent);

button.addEventListener('click', () => {
    count++;
    display.textContent = count;
})
