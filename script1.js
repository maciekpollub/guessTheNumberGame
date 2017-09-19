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

function pressTheEnterKey(event) {
    if (event.keyCode === 13) {
        validateInput();
    }
}

function clickTheButton() {
    validateInput();
}

function validateInput() {
    firstCoordinateGuess = parseInt(xInput.value);
    secondMeteorCoordinate = parseInt(yInput.value);
    if (isNaN(firstCoordinateGuess) === false && isNaN(secondMeteorCoordinate) === false) {
        playGame();
    } else {
        info.innerHTML='Please, enter only the number of pixels for x and y coordinates...'
    }
}

function moveWeapon() {
    weapon.style.left = firstCoordinateGuess
}
