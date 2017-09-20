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
var boom = document.querySelector('.boom');

button.style.cursor = 'pointer';
button.addEventListener('click', clickTheButton, false);
window.addEventListener('keydown', pressTheEnterKey, false);


meteor.style.left = firstMeteorCoordinate + 'px';
meteor.style.top = secondMeteorCoordinate + 'px';

function pressTheEnterKey(event) {
    if (event.keyCode === 13) {
        validateInput();
        setTimeout(resetAmmunition, 1200);
        setTimeout(resetFocusOnInput, 1200);
    }
}

function clickTheButton() {
    validateInput();
    setTimeout(resetAmmunition, 1200);
    setTimeout(resetFocusOnInput, 1200);
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

function moveMeteor(par) {
    secondMeteorCoordinate += par;
    meteor.style.top = secondMeteorCoordinate + 'px';
}

function resetAmmunition() {
    ammunition.style.top = 255 + 'px';
}

function resetFocusOnInput() {
    xInput.focus();
}

function showExplosion() {
    boom.style.display = 'inline-block';
    boom.style.left = firstMeteorCoordinate + 'px';
    boom.style.top = secondMeteorCoordinate + 'px';
    meteor.style.display = 'none';
    ammunition.style.display = 'none';
}

function playGame() {
    guessesMade++;
    guessesRemaining--;
    gameStatus = 'Shots taken: ' + guessesMade + '; Shots remaining: ' + guessesRemaining + ';';
    if (guessesRemaining < 1) {
        endGame();
    } else {
        if ((firstMeteorCoordinate - 5 < firstCoordinateGuess) &&
            (firstCoordinateGuess < firstMeteorCoordinate + 30) &&
            (secondMeteorCoordinate - 5 < secondCoordinateGuess) &&
            (secondCoordinateGuess < secondMeteorCoordinate + 30)) {
            gameWon = true;
            moveWeapon();
            moveAmmunition();
            endGame();
        } else {
            moveWeapon();
            moveAmmunition();
            info.innerHTML = 'Unfortunatelly, you missed...' + '<br>' + gameStatus;
        }
    }
    if (gameWon === false) {
        if (secondMeteorCoordinate > 150) {
            moveMeteor(15);
        } else {
            moveMeteor(30);
        }

    } else {
        setTimeout(showExplosion, 1500);
    }
}

function endGame() {
    if (gameWon) {
        info.innerHTML = 'Congratulations!' + '<br>' + 'You\'ve saved the village! It took you only ' + guessesMade + ' takes!';
    } else {
        info.innerHTML = 'Unfortunatelly...The meteor is about to hit...'
    }
    button.removeEventListener('click', clickTheButton, false);
    button.disabled = true;
    window.removeEventListener('keydown', pressTheEnterKey, false);
    xInput.disabled = true;
    yInput.disabled = true;
}

