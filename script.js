'use strict';

console.log(document.querySelector('.message').textContent);

//Handling Click Events

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!!⛔';

    //When there is no input
  }

  //Implementing the game Logic
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number !!';

    //coding challange
    document.querySelector('.number').textContent = secretNumber;

    //Manupulating css

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //Implementing Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost Game!';
      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = '#B4161B';

      document.querySelector('.number').style.width = '30rem';
    }
  }

  //guess is to low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost Game!';
      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = '#E21717';

      document.querySelector('.number').style.width = '30rem';
    }
  }
});

//again btn

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = '🧑‍💻Start Guessing..';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent = '0';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
