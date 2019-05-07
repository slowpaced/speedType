window.addEventListener('load', init);

//Globals


//Available Levels
const levels = {
    easy: 3,
    medium: 2,
    hard: 1,
}

//Change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = ['combative',
    'shy',
    'fixed',
    'realise',
    'receptive',
    'flight',
    'mine',
    'mother',
    'farm',
    'scare',
    'flawless',
    'load',
    'license',
    'thundering',
    'joyous',
    'finger',
    'flagrant',
    'wonderful',
    'caption',
    'glove',
    'scrub',
    'handy',
    'knit',
    'pretend',
    'adamant',
    'icicle',
    'flash',
    'hilarious',
    'rich',
    'competition',
    'poison',
    'bit',
    'excuse',
    'celery',
    'church',
    'descriptive',
    'cultured',
    'yellow',
    'needle',
    'wink'];

    //Start Game
    function init() {
        seconds.innerHTML = currentLevel;
        showWord(words);
        wordInput.addEventListener('input', startMatch);
        setInterval(countdown, 1000);
        setInterval(checkStatus, 50);
    }

    function startMatch() {
        if(matchWords()) {
            isPlaying = true;
            time = currentLevel + 1;
            showWord(words);
            wordInput.value = '';
            score++;
        }
        if(score === -1) {
            scoreDisplay.innerHTML = 0;
        } else
        scoreDisplay.innerHTML = score;
    }

    function matchWords() {
        if(wordInput.value === currentWord.innerHTML) {
            message.innerHTML = 'Correct!';
            return true;
        } else {
            message.innerHTML = '';
            return false;
        }
    }

    function showWord(words) {
        const randIndex = Math.floor(Math.random() * words.length);
        currentWord.innerHTML = words[randIndex];
    }

    //Countdown Timer
    function countdown(){
        if(time > 0) {
            time--;
        } else if(time === 0) {
            isPlaying = false;
        }
        timeDisplay.innerHTML = time;
    }

    function checkStatus() {
        if(!isPlaying && time === 0) {
            message.innerHTML = 'Game Over!';
            score = -1;
        }
    }
