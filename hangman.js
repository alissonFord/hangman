const alphabet = document.getElementById('letters');
const word = document.getElementById('word');
const buttons = document.getElementsByClassName('btn');
console.log(buttons);
const attempt = document.getElementById('attempt');
const status = document.getElementById('status');

var secretWord;
var guessedLetters;
var wordStatus;
var counter = 0;

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const secretWords = [
    "IGNORANCE",
    "DOUBLE",
    "DISCLOSE",
    "EXPERIMENT",
    "DEPART",
    "VOUCHER",
    "ALOOF",
    "ROAD",
    "GAS"
    ]
    

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
    console.log('wordstatus ' + wordStatus);
    word.innerHTML = wordStatus;
}

function checkLetter(chosenLetter) {
    if(guessedLetters.indexOf(chosenLetter) < 0) {
        guessedLetters.push(chosenLetter);
    }
    console.log('chosenLetter ' + chosenLetter);
    if(secretWord.indexOf(chosenLetter) >= 0) {
        getSecretLetter();
        isWordGuessed();
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
        status.innerHTML = `<span class="game-status">Game over!!!</span>
        <button
          id="again"
          onClick="playAgain()"
        >Play again
        </button>
    `;
        Array.from(buttons).forEach(button => button.disabled = true);
    }
}

function resetData() {
    secretWord = '';
    guessedLetters = [];
    wordStatus = null;
    counter = 10;
}

function isWordGuessed() {
    if (wordStatus.indexOf(' _ ') < 0) {
        status.innerHTML =
        `<span class="game-status">You won!!!</span>
        <button
          id="again"
          onClick="playAgain()"
        >Play again
        </button>
      `;
    }
}

function clearStatus() {
    status.innerHTML = '';
}

function playAgain() {
    playGame();
}

function playGame() {
    resetData();
    clearStatus();
    displayLetters();
    pickSecretWord();
    getSecretLetter();
}

playGame();
