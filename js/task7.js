const inputRef = document.querySelector("#font-size-control");
let text = document.querySelector("#text");

inputRef.addEventListener('input', handleInputRanger)

function handleInputRanger(event) {
  text.style.fontSize = inputRef.value + "px";
}