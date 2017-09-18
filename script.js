/**
 * Created by maciej on 12.09.17.
 */
var number = Math.floor(Math.random() * 101);
console.log(number);
var guess = 0;
/*initializing players variables*/
var guessesMade = 0;
var guessesRemaining = 10;
var gameWon = false;

var input = document.getElementById('input');
var info = document.getElementById('info');
var button = document.querySelector('button');
var pointer = document.querySelector('.pointer');

button.style.cursor = 'pointer';
button.addEventListener('click', clickHandler, false);
window.addEventListener('keydown', keydownHandler, false);

function keydownHandler(event) {
    if (event.keyCode === 13) {
        validateInput()
    }
}


function clickHandler() {
    validateInput()
}

function validateInput() {
    guess=parseInt(input.value);
    if (isNaN(guess)) {
        info.innerHTML='Please, enter the number...'
    } else {
        startGame();
    }

}

function movePointer() {
    pointer.style.left = guess * 2.9 - 10 + "px";
}

function setPointerAtTheNumber() {
    pointer.style.left = number * 2.9 - 10 + 'px';
    pointer.style.color = 'green';
}

function startGame() {
    guess = parseInt(input.value);
    guessesMade++;
    guessesRemaining--;
    movePointer();
    if (guessesRemaining < 1) {
        endGame();
    } else {
        if (guess < number) {
            info.innerHTML = 'The number you\'re looking for is higher... Guess: ' +
                '' + guessesMade + ', Remaining: ' + guessesRemaining;
        } else if (guess > number) {
            info.innerHTML = 'The number  you\'re looking for is lower...Guess: ' +
                '' + guessesMade + ', Remaining: ' + guessesRemaining;
        } else {
            gameWon = true;
            endGame();
        }
    }
}

function endGame() {
    if (gameWon) {
        info.innerHTML = 'Congratulations!'+'<br>'+' You\'ve found the number and it took you only ' + guessesMade + ' ' +
            'steps!'+'<br>'+' Thanks for playing!';
    } else {
        info.innerHTML = 'Unfortunatelly, you\'ve run out of chances... The number was: ' + number +
            '.'+'<br>'+ 'Thanks for playing!';
        setPointerAtTheNumber();
    }
    button.removeEventListener('click', clickHandler, false);
    button.disabled=true;
    window.removeEventListener('keydown', keydownHandler, false);
    input.disabled=true;
}