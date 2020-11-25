// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//     после чего рендерится коллекция.При нажатии на кнопку Очистить,
//         коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const inputNumRef = document.querySelector('input[type="number"]');
const buttonRenderRef = document.querySelector('button[data-action="render"]');
const mainDivRef = document.querySelector('#boxes');
const buttonDestroyRef=document.querySelector('button[data-action="destroy"]');

buttonRenderRef.addEventListener('click', createBoxes);
buttonDestroyRef.addEventListener('click', destroyBoxes);
 


function createBoxes(amount) {
    amount = Number(inputNumRef.value);
    let basicSize = 30;
    for (let i = 0; i < amount; i += 1) {
        const box = document.createElement('div');
        let size = basicSize + i * 10;
        box.setAttribute("style", `width: ${size}px; height: ${size}px; background-color: rgba(${random()},${random()}, ${random()})`);
        mainDivRef.append(box);
    }
}

function random() {
  return Math.floor(Math.random() * 256);
}

function destroyBoxes() {
    mainDivRef.innerHTML = '';
}

