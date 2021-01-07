const alphabet = document.getElementById('letters');
console.log(alphabet);

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z'];

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

function checkLetter() {}


displayLetters();