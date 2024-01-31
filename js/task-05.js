const textBox = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textBox.addEventListener("input", () => textBox.value != "" ? output.innerText = textBox.value : output.innerText = "Anonymous");