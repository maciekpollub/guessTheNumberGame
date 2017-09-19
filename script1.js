/**
 * Created by maciej on 19.09.17.
 */
var firstMeteorCoordinate = Math.floor(Math.random() * 271);
var secondMeteorCoordinate = Math.floor(Math.random() * 201);
console.log(firstMeteorCoordinate, secondMeteorCoordinate);

var firstCoordinateGuess = 0;
var secondCoordinateGuess = 0;
var guessesMade = 0;
var guessesRemaining = 5;

var gameStatus = '';
var gameWon = false;

var xInput = document.getElementById('x_input');
var yInput = document.getElementById('y_input');
var info = document.getElementById('info');
var button = document.querySelector('button');
var weapon = document.querySelector('.weapon');
var meteor = document.querySelector('.meteor');
var ammunition = document.querySelector('.ammunition');

button.style.cursor = 'pointer';
button.addEventListener('click', clickTheButton, false);
window.addEventListener('keydown', pressTheEnterKey, false);

meteor.style.left = firstMeteorCoordinate + 'px';
meteor.style.top = secondMeteorCoordinate + 'px';

function pressTheEnterKey(event) {
    if (event.keyCode === 13) {
        validateInput();
    }
}

function clickTheButton() {
    validateInput();
}

function resetAmmunition() {
    ammunition.style.top = 255 + 'px';
}

function validateInput() {
    firstCoordinateGuess = parseInt(xInput.value);
    secondCoordinateGuess = parseInt(yInput.value);
    if (isNaN(firstCoordinateGuess) === false && isNaN(secondMeteorCoordinate) === false) {
        playGame();
    } else {
        info.innerHTML = 'Please, enter only the number of pixels for x and y coordinates...'
    }
}

function moveWeapon() {
    weapon.style.left = firstCoordinateGuess - 12.5 + 'px';
}

function moveAmmunition() {
    ammunition.style.left = firstCoordinateGuess - 7.5 + 'px';
    ammunition.style.top = secondCoordinateGuess - 7.5 + 'px';
}

function playGame() {
    guessesMade++;
    guessesRemaining--;
    gameStatus = 'Shoots taken: ' + guessesMade + '; Remaining shoots: ' + guessesRemaining + ';';
    moveWeapon();
    moveAmmunition();
    if (guessesRemaining < 1) {
        endGame();
    } else {
        if ((firstMeteorCoordinate - 5 < firstCoordinateGuess) &&
            (firstCoordinateGuess < firstMeteorCoordinate + 30) &&
            (secondMeteorCoordinate - 5 < secondCoordinateGuess) &&
            (secondCoordinateGuess < secondMeteorCoordinate + 30)) {
            gameWon = true;
            endGame();
        } else {
            info.innerHTML = 'Unfortunatelly, you missed...' + '<br>' + gameStatus;

        }
    }
}

function endGame() {
    if (gameWon) {
        info.innerHTML = 'Congratulation!' + '<br>' + 'You\'ve saved the village! It took you only ' + guessesMade + ' takes!';
    } else {
        info.innerHTML = 'Unfortunatelly...The meteor is just above...'
    }
    button.removeEventListener('click', clickTheButton, false);
    button.disabled = true;
    window.removeEventListener('keydown', pressTheEnterKey, false);
    xInput.disabled = true;
    yInput.disabled = true;
}

