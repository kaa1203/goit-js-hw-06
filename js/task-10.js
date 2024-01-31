function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxNum = document.querySelector("input[type='number']");

let container = document.createElement("div");
container.style.margin = "0 auto";
container.style.paddingTop = "20px";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "space-evenly";
container.style.gap = "10px";
body.appendChild(container);

let total = 0;
create.addEventListener("click", () => {
  let index = boxNum.valueAsNumber;
  let max = boxNum.getAttribute("max")
  if (index > max) {
    return alert(`Up to ${max} only`)
  }
  for (let i = 1; i <= index; i++) {
    let div = document.createElement("div");
    div.setAttribute("id", i);
    div.style.width = `${30*i}px`;
    div.style.height = "30px";
    
    div.style.backgroundColor = getRandomHexColor();
    container.appendChild(div);
  }
});
destroy.addEventListener("click", () => container.innerHTML = "");