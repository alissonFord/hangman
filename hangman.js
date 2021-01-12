const alphabet = document.getElementById('letters');
const word = document.getElementById('word');
const buttons = document.getElementsByTagName('button');
const attempt = document.getElementById('attempt');
const header3 = document.getElementsByTagName('h3');
console.log(header3);
var secretWord = '';
var guessedLetters = [];
var wordStatus = null;
var counter = 10;

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const secretWords = ['ignorance', 'double', 'disclose', 'experiment', 'depart', 'voucher', 'aloof', 'road', 'gas'];

function displayLetters() {
    let alpha = letters.map(letter => 
        letter = `
        <button
          class="btn"
          id='` + letter + `'
          onClick="checkLetter('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');
        alphabet.innerHTML = alpha;
}

function pickSecretWord() {
    let index = Math.floor(Math.random() * Math.floor(secretWords.length));
    secretWord = secretWords[index];
    console.log(secretWord);
}

function getSecretLetter() {
    console.log('getSecretLetter');
    wordStatus = secretWord.split('').map(letter => guessedLetters.indexOf(letter) >= 0 ? letter : ' _ ').join('');
    console.log(wordStatus);
    word.innerHTML = wordStatus;
}

function checkLetter(chosenLetter) {
    if(guessedLetters.indexOf(chosenLetter) < 0) {
        guessedLetters.push(chosenLetter);
    }
    console.log('chosenLetter ' + chosenLetter);
    if(secretWord.indexOf(chosenLetter) >= 0) {
        getSecretLetter();
    }
    else {
        counter -= 1;
        checkCounter();
        console.log(counter);
        attempt.innerHTML = counter;
    }
}

function checkCounter() {
    if (counter === 0) {
        word.innerHTML `<span>Game over!!!</span>`;
        Array.from(buttons).forEach(button => button.disabled = true);
    }
}

function resetCounrer() {
    counter = 10;
}

displayLetters();
pickSecretWord();
getSecretLetter();
