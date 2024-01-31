const value = document.getElementById("value");
let inc = document.querySelector('[data-action = "increment"]');
let dec = document.querySelector('[data-action = "decrement"]');

let total = 0;

inc.onclick = () => {
    total += 1;
    value.innerText = total;
};

dec.onclick = () => {
    total -= 1;
    value.innerText = total;
};

