const body = document.querySelector("#body");
const title = document.querySelector("#title");
const text = document.querySelector("#text");
const button = document.querySelector("#button");

button.addEventListener("click",function() {
    body.classList.toggle("dark");
});