const alphabet = document.getElementById('letters');
const word = document.getElementById('word');
const buttons = document.getElementsByClassName('btn');
const status = document.getElementById('status');

const hangman = document.getElementById('hangman');
const ctx = hangman.getContext("2d");

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
        console.log('counter: ' + counter);
        drawHangman();
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

function drawHangman() {
    console.log('drawHangman()');
    switch(counter) {
        case 9:
            console.log('counter === 9');
            drawBase();
            break;
        case 8:
            drawUpright();
            break;
        case 7:
            drawCrossbeam();
            break;
        case 6:
            drawRope();
            break;
        case 5:
            drawHead();
            break;
        case 4:
            drawBody();
            break;
        case 3:
            drawLeftArm();
            break;
        case 2:
            drawRightArm();
            break;
        case 1:
            drawLeftLeg();
            break;
        case 0:
            drawRightLeg();
            break;
        default:
            break;
    }
}

function hangmanContext() {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
}

function drawRope() {
    ctx.moveTo(220, 80);
    ctx.lineTo(220, 120);
    ctx.stroke();
}

function drawCrossbeam() {
    ctx.moveTo(100, 80);
    ctx.lineTo(220,80);
    ctx.stroke();
}

function drawUpright() {
    ctx.moveTo(100, 450);
    ctx.lineTo(100, 80);
    ctx.stroke();
}

function drawBase() {
    console.log("drawBase");
    ctx.moveTo(50,450);
    ctx.lineTo(350,450);
    ctx.stroke();
}

function drawHead() {
    ctx.beginPath();
    ctx.arc(220, 150, 30, 0, Math.PI*2, true);
    ctx.stroke();
}

function drawBody() {
    ctx.moveTo(220, 180);
    ctx.lineTo(220, 320);
    ctx.stroke();
}

function drawLeftArm() {
    ctx.moveTo(220, 200);
    ctx.lineTo(190, 280);
    ctx.stroke();
}

function drawRightArm() {
    ctx.moveTo(220, 200);
    ctx.lineTo(250, 280);
    ctx.stroke();
}

function drawLeftLeg() {
    ctx.moveTo(220, 320);
    ctx.lineTo(180, 400);
    ctx.stroke();
}

function drawRightLeg() {
    ctx.moveTo(220, 320);
    ctx.lineTo(260, 400);
    ctx.stroke();
}

function clearStatus() {
    status.innerHTML = '';
}

function resetData() {
    secretWord = '';
    guessedLetters = [];
    wordStatus = null;
    counter = 10;
    ctx.clearRect(0, 0, hangman.width, hangman.height);
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
    hangmanContext();
}

playGame();
