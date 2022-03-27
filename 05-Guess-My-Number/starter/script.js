'use strict';

/************* (70) PROJECT #1: Guest My Number  *************/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const correctNumber = function (message) {
  displayMessage(message);
  document.querySelector('.number').textContent = secretNumber;

  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';

  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
};

const wrongNumber = function (message, loseMessage) {
  if (score > 1) {
    displayMessage(message);
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage(loseMessage);
    document.querySelector('.score').textContent = 0;
  }
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  // When the is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When players wins
  } else if (guess === secretNumber) {
    correctNumber('🎉 Correct Number!');

    // When wrong number
  } else if (guess !== secretNumber) {
    wrongNumber(
      guess > secretNumber ? '📈 Too high!' : '📉 Too low!',
      '💥 You lost the game!'
    );
  }
});

const resetGame = function (message) {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage(message);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.again').addEventListener('click', function () {
  resetGame('Start guessing...');
});
