const nameInput = document.querySelector("#nameInput");
const ageInput = document.querySelector("#ageInput");
const hobbyInput = document.querySelector("#hobbyInput");
const button = document.querySelector("#button");
const name = document.querySelector('#name');
const age = document.querySelector('#age');
const hobby = document.querySelector('#hobby');

button.addEventListener("click", function () {
    name.textContent = `My name is ${nameInput.value}.`
    age.textContent = `I'm ${ageInput.value} years old.`
    hobby.textContent = `My hobby is ${hobbyInput.value}`
});