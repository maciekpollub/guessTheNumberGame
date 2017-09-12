/**
 * Created by maciej on 12.09.17.
 */
var number=Math.floor(Math.random()*101);
var guess=0; /*initializing players variables*/
var guessesMade=0;
var guessesRemaining=10;

var input=document.getElementById('input');
var info=document.getElementById('info');
var button=document.querySelector('button');

button.style.cursor='pointer';
button.addEventListener('click', clickHandler, false);

function clickHandler(){
    startGame()
}

function startGame(){
    guess=parseInt(input.value);
    if (guess<number){
        info.innerHTML='The number you\'re looking for is higher...';
    } else if (guess>number){
        info.innerHTML='The number  you\'re looking for is lower...';
    } else {
        info.innerHTML='You\'ve found it! Congratulations!';
    }
}