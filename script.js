'use strict';

let secretNumber = Math.trunc(Math.random()*20) +1;
let score = 20;
let highScore = 0;


const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        displayMessage('No number inserted')
    }
    else if(guess==secretNumber){
        displayMessage('Correct Number!')
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        if(highScore>score){
            highScore=score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if(guess !== secretNumber){
        displayMessage(guess>secretNumber?'too high' : 'too low')
        --score;
        document.querySelector('.score').textContent = score;
    }else{
        displayMessage('Try again')
        document.querySelector('.score').textContent = 0;
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });

