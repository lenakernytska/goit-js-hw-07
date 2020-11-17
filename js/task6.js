const inputRef = document.querySelector("#validation-input");
const dataLength = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', handleInputBlur);

function handleInputBlur(event) {
  if (inputRef.value.length === dataLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}

