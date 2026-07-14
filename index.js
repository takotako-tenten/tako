const text = document.querySelector("#text");
const button = document.querySelector("#button");
let color = 0;

button.addEventListener("click",function() {
    if (color === 1) {
        text.classList.remove("red");
        text.classList.add("blue");
        color = 2;
    } else if (color === 2) {
        text.classList.remove("blue");
        text.classList.add("red");
        color = 1;
    } else {
        text.classList.add("blue");
        color = 2;
    }
});