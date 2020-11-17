const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', inputHandler); 

function inputHandler(event) {
 spanRef.textContent = event.target.value; 
};