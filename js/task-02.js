const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById("ingredients");

// for (const ingredient of ingredients) {
//   let li = document.createElement("li");
//   li.innerText = ingredient;
//   ul.appendChild(li);
// }

const li = ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("");
ul.insertAdjacentHTML("afterbegin", li);