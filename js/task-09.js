function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBtn = document.querySelector(".change-color");
const bodyColor = document.querySelector(".color");
const body = document.body;

colorBtn.addEventListener("click", () => { 
  bodyColor.innerText = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
});