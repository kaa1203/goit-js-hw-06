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

create.addEventListener("click", () => {
  let index = boxNum.valueAsNumber;
  let max = boxNum.getAttribute("max");

  if (index > max) {
    return alert(`Up to ${max} only`)
  }

  for (let i = 0; i < index; i++) {
    let div = document.createElement("div");
    let size = i * 10;
    div.style.width = `${30 + size}px`;
    div.style.height = `${30 + size}px`;
    div.style.backgroundColor = getRandomHexColor();
    container.appendChild(div);
  }
  boxNum.value = "";
});

destroy.addEventListener("click", () => container.innerHTML = "");
boxNum.addEventListener("input", () => container.innerHTML = "");