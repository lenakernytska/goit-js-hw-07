const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList= document.querySelector('#ingredients')

const ingredientsEl = ingredients.map(( ingredient) => {
  const items = document.createElement('li');
  items.textContent = ingredient;
  return items;
  });
ingredientsList.append(...ingredientsEl);