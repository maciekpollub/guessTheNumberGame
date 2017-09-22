/**
 * Created by maciej on 21.09.17.
 */
var map = [];
map[0] = 'Welcome to the stage 0.';
map[1] = 'Feel free to make you feel at home on the stage 1.';
map[2] = 'Be careful on the stage 2';
map[3] = 'Welcome to the stage 3.';
map[4] = 'You are currently on stage 4.';
map[5] = 'Make you feel at home on the stage 5.';
map[6] = 'Do not stand still on the stage 6.';
map[7] = 'Be careful on the stage 7.';
map[8] = 'Take your time on the stage 8.';

var locationNumber = 4;

var zero = document.querySelector('.zero');
var one = document.querySelector('.one');
var two = document.querySelector('.two');
var three = document.querySelector('.three');
var four = document.querySelector('.four');
var five = document.querySelector('.five');
var six = document.querySelector('.six');
var seven = document.querySelector('.seven');
var eight = document.querySelector('.eight');

four.style.backgroundColor = 'lightGrey';

var info = document.querySelector('.info');
info.innerHTML = map[locationNumber];
var input = document.querySelector('.input');
var playersInput = '';

var errorInfo = '';
var acceptableWords = ['north', 'east', 'south', 'west'];
var wordOfAction = '';

var button = document.querySelector('button');
button.style.cursor = 'pointer';
button.addEventListener('click', clickTheButton, false);

function clickTheButton() {
    playGame();
}

function playGame() {
    playersInput = input.value;
    playersInput = playersInput.toLowerCase();

    errorInfo = '';
    wordOfAction = '';

    for (var i = 0; i < acceptableWords.length; i++) {
        if (playersInput.indexOf(acceptableWords[i]) !== -1) {
            wordOfAction = acceptableWords[i];
            break;
        }
    }
    switch (wordOfAction) {
        case 'north':
            locationNumber -= 3;
            break;

        case 'east':
            locationNumber += 1;
            break;

        case 'south':
            locationNumber += 3;
            break;

        case 'west':
            locationNumber -= 1;
            break;

        default:
            errorInfo = 'I am a program - not a human being, Enter the command containing: east, west, south or north.';
    }
    setTimeout(fadeColor, 500);
    setTimeout(updateLocation, 1000);
}

function fadeColor() {
   one.style.backgroundColor = 'white';
   two.style.backgroundColor = 'white';
   three.style.backgroundColor = 'white';
   four.style.backgroundColor = 'white';
   five.style.backgroundColor = 'white';
   six.style.backgroundColor = 'white';
   seven.style.backgroundColor = 'white';
   eight.style.backgroundColor = 'white';
   zero.style.backgroundColor = 'white';
}

function updateLocation() {
    switch (locationNumber) {
        case 0:
            zero.style.backgroundColor = 'lightGrey';
            break;

        case 1:
            one.style.backgroundColor = 'lightGrey';
            break;

        case 2:
            two.style.backgroundColor = 'lightGrey';
            break;

        case 3:
            three.style.backgroundColor = 'lightGrey';
            break;

        case 4:
            four.style.backgroundColor = 'lightGrey';
            break;

        case 5:
            five.style.backgroundColor = 'lightGrey';
            break;

        case 6:
            six.style.backgroundColor = 'lightGrey';
            break;

        case 7:
            seven.style.backgroundColor = 'lightGrey';
            break;

        case 8:
            eight.style.backgroundColor = 'lightGrey';
            break;
    }
    info.innerHTML = map[locationNumber];
    info.innerHTML += '<br>' + '<kbd>' + errorInfo + '</kbd>';
}