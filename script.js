'use strict';

function checkResult(){
    const guess = Number(document.querySelector('.guess').value);

    if (guess){
        if (score <= 1){
            score -= 1;
            document.querySelector('.score').textContent = score;
            displayMessage('You lose');
        }
        else {
            if (guess !== hiddenNumber){
                score -=1;
                document.querySelector('.score').textContent = score; 
                if (guess > hiddenNumber) {
                    displayMessage('Go lower');
                }
                else {
                    displayMessage('Go higher');
                }
            } 
            else {
                document.querySelector('.number').textContent = hiddenNumber;
                displayMessage('You won!');
                document.querySelector('body').style.backgroundColor = '#60b347';
                document.querySelector('.number').style.width = '30rem';
                checkHigherResult(score);
            } 
        }
    }
    else {
        displayMessage('Insert a number');
    }
}

function checkHigherResult(newScore){
    if (Number(newScore) > Number(document.querySelector('.highscore').textContent)){
        document.querySelector('.highscore').textContent = newScore;
    }
}

function resetGame(){
    hiddenNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
}

function displayMessage(message){
    document.querySelector('.message').textContent = message;
}

let hiddenNumber = Math.floor(Math.random() * 20) + 1; 
let score = 20;


document.querySelector('.check').addEventListener('click', () => {checkResult()});
document.querySelector('.again').addEventListener('click', () => {resetGame()});