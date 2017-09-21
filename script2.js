/**
 * Created by maciej on 21.09.17.
 */
var map = [];
map[0] = 'sth on stg 0';
map[1] = 'sth on stg 1';
map[2] = 'sth on stg 2';
map[3] = 'sth on stg 3';
map[4] = 'You are currently on stage 4.';
map[5] = 'sth on stg 5';
map[6] = 'sth on stg 6';
map[7] = 'sth on stg 7';
map[8] = 'sth on stg 8';

var initialLocation = 4;
var playersInput =  '';
var errorInfo = '';
var acceptableWords = ['north', 'east', 'south', 'west'];
var wordOfAction = '';


var info = document.querySelector('.info');
info.innerHTML = map[initialLocation];
var input = document.querySelector('.input');

var button = document.querySelector('button');
button.style.cursor = 'pointer';
button.addEventListener('click', clickTheButton, false);
