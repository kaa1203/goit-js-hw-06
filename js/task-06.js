const textBox = document.querySelector("#validation-input");
const dataLength = textBox.getAttribute("data-length");

const classToggle = () => { 
    if (textBox.value.length >= dataLength) {
        textBox.classList.add("valid")
        textBox.classList.remove("invalid")
    } else {
        textBox.classList.add("invalid");
        textBox.classList.remove("valid");
    }
}
textBox.addEventListener("blur", classToggle);
