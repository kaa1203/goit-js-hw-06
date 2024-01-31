let categories = document.querySelectorAll(".item");
console.log("Number of Categories: " + categories.length);

for (const category of categories) {
    console.log("Category: " + category.children[0].innerText);
    console.log("Element: " + category.children[1].children.length);    
}
