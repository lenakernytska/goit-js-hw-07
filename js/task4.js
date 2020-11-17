let counterValue = 0;

 const decrement=()=>{
  counterValue-=1;
  result();
}
const increment=()=>{
  counterValue+=1;
  result();
}

const result=()=> {
  valueRef.textContent = counterValue;
}

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
