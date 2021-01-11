const alphabet = document.getElementById('letters');
const word = document.getElementById('word');
var secretWord = '';
var counter = 10;
console.log(alphabet);

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z'];

const secretWords = ['ignorance', 'double', 'disclose', 'experiment', 'depart', 'voucher', 'aloof', 'road', 'gas'];

function displayLetters() {
    let list = document.createElement('ul');
    for(let i = 0; i < letters.length; i++) {
        let letter = document.createElement('button');
        letter.onclick = checkLetter();
        letter.innerHTML =  letters[i];
        alphabet.appendChild(list);
        list.appendChild(letter);
    }
}

function pickSecretWord() {
    let index = Math.floor(Math.random() * Math.floor(secretWords.length));
    secretWord = secretWords[index];
    console.log(secretWord);
}

function coverSecretWord() {
    for (let i = 0; i < secretWord.length; i++) {
        console.log('inside voersecretword');
        let currentLetter = document.createElement('span');
        currentLetter.innerHTML = ' _ ';
        word.appendChild(currentLetter);
    }
}

function checkLetter() {}


displayLetters();
pickSecretWord();
coverSecretWord();