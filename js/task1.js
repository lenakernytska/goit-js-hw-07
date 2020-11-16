
const categories = document.querySelectorAll(".item");
console.log(`В списке ${categories.length} категории`); 

categories.forEach((category =>{
  const titleRef = category.querySelector("h2");
  const elements = category.querySelectorAll("li");
  console.log(`Категория: ${titleRef.textContent}\nКоличество элементов:${elements.length}`)
}))

