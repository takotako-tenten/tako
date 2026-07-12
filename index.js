const title = document.querySelector('#title');
const name = document.querySelector('#name');
const age = document.querySelector('#age');
const button = document.querySelector('#changeLanguage');
let language = 0;

button.addEventListener('click', function() {
    if (language === 0) {
        language = 1;
        title.textContent= '私について'
        name.textContent = '私の名前はたこてんです。'
        age.textContent = '私は16歳です。'
        button.textContent = 'Change to English'
    } else {
        language = 0;
        title.textContent= 'About Me'
        name.textContent = 'My name is Takoten.'
        age.textContent = 'I am 16 years old.'
        button.textContent = '日本語にする'
    }
});